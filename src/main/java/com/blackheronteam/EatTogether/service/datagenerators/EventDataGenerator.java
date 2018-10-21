package com.blackheronteam.EatTogether.service.datagenerators;

import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.domain.User;
import com.blackheronteam.EatTogether.service.EventAddressService;
import com.blackheronteam.EatTogether.service.UserService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JSR310Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.List;
import java.util.stream.Collectors;

@Service("eventDataGenerator")
public class EventDataGenerator implements Generator {
    @Autowired
    EventAddressService eventAddressService;

    @Autowired
    private UserService userService;

    @Value(value = "classpath:events.json")
    private Resource events;

    private List<Event> getEvents() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        try {
            return mapper.readValue(events.getInputStream(), new TypeReference<List<Event>>(){});
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Override
    public void generate() {
//        UserDetails
        List<User> userList = userService.findAllUsers().stream().filter(u -> !u.getUsername().equals("woj@gmail.com")).collect(Collectors.toList());

    getEvents().forEach(event -> {
        event.setOrganizerId(userList.get(1).getId());
        eventAddressService.saveAndUpdateCoordinates(event);
    });

    }
}
