package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.User;
import com.blackheronteam.EatTogether.repository.EventRepository;
import com.blackheronteam.EatTogether.service.datagenerators.EventDataGenerator;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InitUsersService {

    private final BCryptPasswordEncoder encoder;
    private final UserService userService;
    private final EventAddressService eventAddressService;
    private final EventRepository eventRepository;

    private final EventDataGenerator eventDataGenerator;

    @Value(value = "classpath:users.json")
    private Resource users;

    @PostConstruct
    public void init() {
        cleanup();
        initUsers();
        eventDataGenerator.generate();
    }

    private void cleanup() {
        eventRepository.deleteAll();
        userService.dropUsers();
    }

    private void initUsers() {

        getUsers().forEach(user -> {
            user.setPassword(encoder.encode("asdf"));
            userService.saveUser(user);
        });
    }

    private List<User> getUsers() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(users.getInputStream(), new TypeReference<List<User>>(){});
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

}
