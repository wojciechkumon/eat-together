package com.blackheronteam.EatTogether.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/events")
@Log4j2
public class EventController {

    @PostMapping("/add")
    public ResponseEntity<?> addEvent(@RequestParam("eventName") String name) {
        log.info("Adding event: " + name);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
