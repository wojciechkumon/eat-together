package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.domain.Cuisine;
import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.dto.EventDto;
import com.blackheronteam.EatTogether.repository.EventRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;


@RestController
@RequestMapping("/events")
@Log4j2
@RequiredArgsConstructor
public class EventController {
    private final EventRepository eventRepository;

    @PostMapping("/add-test")
    public ResponseEntity<?> addEvent(@RequestParam("eventName") String name) {
        log.info("Adding event: " + name);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    public void addEvent(EventDto eventDto) {
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
        event.setDateTime(LocalDateTime.parse(eventDto.getDateTime()));

//        event.setLatitude();
//        event.setLongitude();
        // TODO long + lat
        eventRepository.save(event);
        log.info("Event: " + event.toString() + " created");
    }
}
