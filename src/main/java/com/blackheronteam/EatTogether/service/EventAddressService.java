package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.domain.Cuisine;
import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.dto.EventDto;
import com.blackheronteam.EatTogether.repository.EventRepository;
import com.mapbox.geojson.Point;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@Log4j2
@Service(value = "eventAddressService")
public class EventAddressService {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    AddressLookupService addressLookupService;

    public void updateEventAddressCoordinates(final Event event) {
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

    // TODO
    public void saveOperation(EventDto eventDto) {
        Event event = new Event();
        event.setName(eventDto.getName());
        event.setDescription(eventDto.getDescription());
        event.setEstimatedPrice(eventDto.getEstimatedPrice());
        event.setCurrency(eventDto.getCurrency());
        event.setMaxParticipants(eventDto.getMaxParticipants());

        event.setAddress(Address.builder()
                .country(eventDto.getCountry())
                .city(eventDto.getCity())
                .zip(eventDto.getZip())
                .streetWithNumber(eventDto.getStreetWithNumber())
                .phoneNumber(eventDto.getPhoneNumber())
                .build()
        );


        event.setCuisines(eventDto.getCuisines().stream().map(cuisineType -> Cuisine.builder().cuisineType(cuisineType).build()).collect(Collectors.toList()));
        event.setDateTime(LocalDateTime.now());
//        event.setDateTime(LocalDateTime.parse(eventDto.getDateTime()));

//        event.setLatitude();
//        event.setLongitude();
        // TODO long + lat
        Event saved = eventRepository.save(event);
        updateEventAddressCoordinates(saved);


        log.info("Event: " + event.toString() + " created");
    }

    public void saveOperation(EventDto eventDto, Address address) {
        Event event = new Event();
        event.setName(eventDto.getName());
        event.setDescription(eventDto.getDescription());
        event.setEstimatedPrice(eventDto.getEstimatedPrice());
        event.setCurrency(eventDto.getCurrency());
        event.setMaxParticipants(eventDto.getMaxParticipants());

        event.setAddress(address);


        event.setCuisines(eventDto.getCuisines().stream().map(cuisineType -> Cuisine.builder().cuisineType(cuisineType).build()).collect(Collectors.toList()));
//        event.setDateTime(LocalDateTime.now());
        event.setDateTime(LocalDateTime.parse(eventDto.getDateTime()));

//        event.setLatitude();
//        event.setLongitude();
        // TODO long + lat
//        Event saved = eventRepository.save(event);
//
//        updateEventAddressCoordinates(event);
//
//
//        log.info("Event: " + event.toString() + " created");
    }
}
