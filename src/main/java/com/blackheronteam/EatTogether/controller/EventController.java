package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.dto.EventDto;
import com.blackheronteam.EatTogether.dto.MealDto;
import com.blackheronteam.EatTogether.service.EventAddressService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/events")
@Log4j2
@RequiredArgsConstructor
public class EventController {
    private final EventAddressService eventAddressService;

    @PostMapping("/add-test")
    public ResponseEntity<?> addEvent(@RequestParam("eventName") String name) {
        log.info("Adding event: " + name);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    public void addEvent(@RequestBody EventDto eventDto) {
        eventAddressService.saveAndUpdateCoordinates(eventDto);


    }
}
