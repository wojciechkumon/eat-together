package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.domain.Cuisine;
import com.blackheronteam.EatTogether.domain.CuisineType;
import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.domain.Intolerance;
import com.blackheronteam.EatTogether.domain.Meal;
import com.blackheronteam.EatTogether.domain.User;
import com.blackheronteam.EatTogether.dto.EventDto;
import com.blackheronteam.EatTogether.dto.MealDto;
import com.blackheronteam.EatTogether.repository.AddressRepository;
import com.blackheronteam.EatTogether.repository.EventRepository;
import com.blackheronteam.EatTogether.repository.UserRepository;
import com.mapbox.geojson.Point;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service(value = "eventAddressService")
public class EventAddressService {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    AddressLookupService addressLookupService;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    UserRepository userRepository;

    public void saveAndUpdateCoordinates(final Event event) {
        var eventAddress = event.getAddress();
        var addressQuery = eventAddress.convertToQuery();

        Consumer<Point> updateCoordinates = point -> {
            log.info("updating coordinates :" + point.toString() +
                    " for address " + eventAddress.toString() +
                    " for event " + event.toString());

            event.setLatitude(point.latitude());
            event.setLongitude(point.longitude());

            eventRepository.save(event);
        };

        addressLookupService.getMap(addressQuery, updateCoordinates);
    }

    public void saveAndUpdateCoordinates(final EventDto eventDto, String authorEmail) {
        Address address = Address.builder()
                .country(eventDto.getCountry())
                .city(eventDto.getCity())
                .zip(eventDto.getZip())
                .streetWithNumber(eventDto.getStreetWithNumber())
                .phoneNumber(eventDto.getPhoneNumber())
                .build();

        Event event = Event.builder().build();
        event.setName(eventDto.getName());
        event.setDescription(eventDto.getDescription());
        event.setEstimatedPrice(eventDto.getEstimatedPrice());
        event.setCurrency(eventDto.getCurrency());
        event.setMaxParticipants(eventDto.getMaxParticipants());
        event.setAddress(address);
        event.setCuisines(eventDto.getCuisines().stream().map(cuisineType -> Cuisine.builder().cuisineType(CuisineType.valueOf(cuisineType)).build()).collect(Collectors.toList()));
        event.setDateTime(LocalDateTime.parse(eventDto.getDateTime()));
        event.setMeals(eventDto.getMeals().stream().map(this::mapMeal).collect(Collectors.toList()));
        User user = userRepository.findUserByUsername(authorEmail);
        event.setOrganizerId(user.getId());


        saveAndUpdateCoordinates(event);
        log.info("Event: " + event.toString() + " created");


    }

    private Meal mapMeal(MealDto mealDto) {
        return Meal.builder()
                .mealName(mealDto.getMealName())
                .ingredients(mealDto.getIngredients())
                .intolerances(mealDto.getIntolerances().stream().map(intoleranceType -> Intolerance.builder().intoleranceType(intoleranceType).build()).collect(Collectors.toList())).build();
    }

    public List<Event> getUserEvents(String name) {
        User user = userRepository.findUserByUsername(name);
        return eventRepository.findByOrganizerId(user.getId());
    }
}
