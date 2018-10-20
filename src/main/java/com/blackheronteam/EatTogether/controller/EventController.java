package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.domain.Cuisine;
import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.dto.EventDto;
import com.blackheronteam.EatTogether.dto.MealDto;
import com.blackheronteam.EatTogether.repository.AddressRepository;
import com.blackheronteam.EatTogether.repository.EventRepository;
import com.blackheronteam.EatTogether.repository.MealRepository;
import com.blackheronteam.EatTogether.service.EventAddressService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.stream.Collectors;


@RestController
@RequestMapping(value = "/events")
@Log4j2
@RequiredArgsConstructor
public class EventController {
    private final EventRepository eventRepository;
    private final AddressRepository addressRepository;
    private final MealRepository mealRepository;
    private final EventAddressService eventAddressService;

    @PostMapping("/add-test")
    public ResponseEntity<?> addEvent(@RequestParam("eventName") String name) {
        log.info("Adding event: " + name);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/add")
    public void addEvent(@RequestBody EventDto eventDto) {
        Address address = Address.builder()
                .country(eventDto.getCountry())
                .city(eventDto.getCity())
                .zip(eventDto.getZip())
                .streetWithNumber(eventDto.getStreetWithNumber())
                .phoneNumber(eventDto.getPhoneNumber())
                .build();

//        Meal meal = Meal.builder().mealName()
        addressRepository.save(address);
        Event event =Event.builder().build();
        event.setName(eventDto.getName());
        event.setDescription(eventDto.getDescription());
        event.setEstimatedPrice(eventDto.getEstimatedPrice());
        event.setCurrency(eventDto.getCurrency());
        event.setMaxParticipants(eventDto.getMaxParticipants());
        event.setAddress(address);
        event.setCuisines(eventDto.getCuisines().stream().map(cuisineType -> Cuisine.builder().cuisineType(cuisineType).build()).collect(Collectors.toList()));
        event.setDateTime(LocalDateTime.parse(eventDto.getDateTime()));

//        event.setLatitude();
//        event.setLongitude();
        // TODO long + lat
        Event saved = eventRepository.save(event);
        eventAddressService.updateEventAddressCoordinates(saved);


        log.info("Event: " + event.toString() + " created");
    }

    private void saveMeal(MealDto mealDto) {
//        Meal meal = Meal.builder()
//                .mealName(mealDto.getMealName())
//                .ingredients(new ArrayList<>(mealDto.getIngredients()))
//                .intolerances(mealDto.getIntolerances().stream().map(intolerance -> Intolerance.builder().intoleranceType(intolerance)))
    }
}
