package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.*;
import com.blackheronteam.EatTogether.repository.AddressRepository;
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
    private AddressRepository addressRepository;

    @Autowired
    private EventAddressService eventAddressService;

    public InitUsersService() {
    }

    @PostConstruct
    public void init() {
        initUsers();
    }

    private void initUsers() {
//        if (delete) {
//            userService.dropUsers();
////            addressRepository.deleteAll();
//            eventAddressService.dropAll();
//            addressRepository.deleteAll();
//
//        }

        Address address1 = Address.builder()
                .city("Warszawa")
                .phoneNumber("")
                .streetWithNumber("plac Europejski 1")
                .zip("00-844").build();
        Address address2 = Address.builder()
                .city("Warszawa")
                .phoneNumber("")
                .streetWithNumber("Grzybowska 63")
                .zip("00-844").build();
        addressRepository.save(address1);
        addressRepository.save(address2);


        userService.saveUser(User.builder()
                .firstName("Michal")
                .lastName("B.")
                .username("mic@gmail.com")
                .password(encoder.encode("asdf1"))
                .address(address1)
                .build());
        userService.saveUser(User.builder()
                .firstName("Przemek")
                .lastName("F.")
                .username("prz@gmail.com")
                .password(encoder.encode("asdf2"))
                .address(address2)
                .build());
        userService.saveUser(User.builder()
                .firstName("Gaba")
                .lastName("B.")
                .username("gab@gmail.com")
                .password(encoder.encode("asdf"))
                .address(address1)
                .build());
        userService.saveUser(User.builder()
                .firstName("Wojtek")
                .lastName("K.")
                .username("woj@gmail.com")
                .password(encoder.encode("asdf3"))
                .address(address2)
                .build());


        eventAddressService.saveAndUpdateCoordinates(
                Event.builder()
                        .address(address1)
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
