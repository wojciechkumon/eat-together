package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.domain.Currency;
import com.blackheronteam.EatTogether.domain.Event;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
@RequestMapping("/events")
@Log4j2
public class EventController {

    @PostMapping("/add-test")
    public ResponseEntity<?> addEvent(@RequestParam("eventName") String name) {
        log.info("Adding event: " + name);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addEvent(@RequestParam("eventName") String eventName,
                                      @RequestParam("description") String description,
                                      @RequestParam("price") BigDecimal price,
                                      @RequestParam("currency") String currency,
                                      @RequestParam("numberOfParticipants") Long numberOfParticipants
                                      ) {
        Event event = new Event();
        event.setName(eventName);
        event.setDescription(description);
        event.setEstimatedPrice(price);
        event.setCurrency(new Currency(currency));
        event.setNumberOfParticipants(numberOfParticipants);

        return new ResponseEntity<>(event, HttpStatus.OK);
    }
}
