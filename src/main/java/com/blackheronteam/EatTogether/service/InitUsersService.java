package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.domain.User;
import com.blackheronteam.EatTogether.repository.EventRepository;
import com.blackheronteam.EatTogether.service.datagenerators.AddressDataGenerator;
import com.blackheronteam.EatTogether.service.datagenerators.EventDataGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
@RequiredArgsConstructor
public class InitUsersService {

    private final BCryptPasswordEncoder encoder;
    private final UserService userService;
    private final EventAddressService eventAddressService;
    private final AddressDataGenerator addressDataGenerator;
    private final EventRepository eventRepository;

    private final EventDataGenerator eventDataGenerator;

    @PostConstruct
    public void init() {
        cleanup();

//        addressDataGenerator.generate();

        initUsers();
        eventDataGenerator.generate();


    }

    private void cleanup() {
        eventRepository.deleteAll();
        userService.dropUsers();
    }

    private void initUsers() {
        userService.saveUser(User.builder()
                .firstName("Michal")
                .lastName("B.")
                .username("mic@gmail.com")
                .password(encoder.encode("asdf1"))
                .rating(4)
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
                .rating(5)
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
                .rating(4)
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
                .rating(5)
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("")
                        .streetWithNumber("plac Europejski 1")
                        .zip("00-844").build())
                .build());

//        eventAddressService.saveAndUpdateCoordinates(
//                Event.builder()
//                        .address(Address.builder()
//                                .city("Warszawa")
//                                .phoneNumber("")
//                                .streetWithNumber("Grzybowska 63")
//                                .zip("00-844").build())
//                        .cuisines(Arrays.asList(Cuisine.builder().cuisineType(CuisineType.CAKE).build()))
//                        .currency("USD")
//                        .dateTime(LocalDateTime.now())
//                        .description("obiadek u babci")
//                        .name("dinner")
//                        .estimatedPrice(100L)
//                        .meals(Collections.emptyList())
//                        .maxParticipants(6L)
//                        .build()
//
//        );
    }

}
