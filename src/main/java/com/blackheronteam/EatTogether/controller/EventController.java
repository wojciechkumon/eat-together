package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.dto.EventDto;
import com.blackheronteam.EatTogether.service.EventAddressService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import com.blackheronteam.EatTogether.service.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;


@RestController
@RequestMapping(value = "/events")
@Log4j2
@RequiredArgsConstructor
public class EventController {
    private final EventAddressService eventAddressService;
    private final EventService eventService;

    @PostMapping("/add-test")
    public ResponseEntity<?> addEvent(@RequestParam("eventName") String name) {
        log.info("Adding event: " + name);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    public void addEvent(@RequestBody EventDto eventDto, Principal principal) {
        eventAddressService.saveAndUpdateCoordinates(eventDto, principal.getName());
    }

    @GetMapping("/my")
    public List<Event> myEvents(Principal principal) {
        return eventAddressService.getUserEvents(principal.getName());
    }

    @GetMapping
    public List<Event> allEvents() {
        return eventAddressService.getAll();
    }

    @PostMapping("/join")
    public void joinEvent(@RequestBody Long eventId, Principal principal) {
        eventService.joinEvent(eventId, principal.getName());
    }
}
