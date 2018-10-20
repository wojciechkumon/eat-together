package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.domain.Cuisine;
import com.blackheronteam.EatTogether.domain.CuisineType;
import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Collections;

@Service
public class InitUsersService {

    @Autowired
    BCryptPasswordEncoder encoder;
    boolean delete = true;
    @Autowired
    private UserService userService;

    @Autowired
    private EventAddressService eventAddressService;

    public InitUsersService() {
    }

    @PostConstruct
    public void init() {
        initUsers();
    }

    private void initUsers() {
        if (delete) {
            userService.dropUsers();
        }

        userService.saveUser(User.builder()
                .firstName("Michal")
                .lastName("B.")
                .username("mic@gmail.com")
                .password(encoder.encode("asdf1"))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("")
                        .streetWithNumber("plac Europejski 1")
                        .zip("00-844").build())
                .build());
        userService.saveUser(User.builder()
                .firstName("Przemek")
                .lastName("F.")
                .username("prz@gmail.com")
                .password(encoder.encode("asdf2"))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("")
                        .streetWithNumber("plac Europejski 1")
                        .zip("00-844").build())
                .build());
        userService.saveUser(User.builder()
                .firstName("Gaba")
                .lastName("B.")
                .username("gab@gmail.com")
                .password(encoder.encode("asdf"))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("")
                        .streetWithNumber("plac Europejski 1")
                        .zip("00-844").build())
                .build());
        userService.saveUser(User.builder()
                .firstName("Wojtek")
                .lastName("K.")
                .username("woj@gmail.com")
                .password(encoder.encode("asdf3"))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("")
                        .streetWithNumber("plac Europejski 1")
                        .zip("00-844").build())
                .build());

        eventAddressService.saveAndUpdateCoordinates(
                Event.builder()
                        .address(Address.builder()
                                .city("Warszawa")
                                .phoneNumber("")
                                .streetWithNumber("Grzybowska 63")
                                .zip("00-844").build())
                        .cuisines(Arrays.asList(Cuisine.builder().cuisineType(CuisineType.CAKE).build()))
                        .currency("USD")
                        .dateTime(LocalDateTime.now())
                        .description("obiadek u babci")
                        .name("dinner")
                        .estimatedPrice(100L)
                        .meals(Collections.emptyList())
                        .maxParticipants(6L)
                        .build()

                        );
    }

}
