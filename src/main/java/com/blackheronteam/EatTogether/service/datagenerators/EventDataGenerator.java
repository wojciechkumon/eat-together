package com.blackheronteam.EatTogether.service.datagenerators;

import com.blackheronteam.EatTogether.domain.*;
import com.blackheronteam.EatTogether.service.EventAddressService;
import com.blackheronteam.EatTogether.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service("eventDataGenerator")
public class EventDataGenerator implements Generator {
    @Autowired
    EventAddressService eventAddressService;

    @Autowired
    private UserService userService;

    @Override
    public void generate() {
//        UserDetails
        List<User> userList = userService.findAllUsers().stream().filter(u -> u.getUsername().equals("woj@gmail.com")).collect(Collectors.toList());

        Event event = Event.builder()
                .cuisines(Arrays.asList(
                        Cuisine.builder().cuisineType(CuisineType.VEGE).build(),
                        Cuisine.builder().cuisineType(CuisineType.BURGERS).build()))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("")
                        .streetWithNumber("aleja Niepodleglosci 213")
                        .country("Polska")
                        .zip("02-086").build())
                .currency("USD")
                .dateTime(LocalDateTime.of(2018, 10, 31, 18, 00))
                .estimatedPrice(20L)
                .maxParticipants(5L)
                .name("Vegetarian supper: Gnocchi and Burger")
                .meals(Arrays.asList(
                        Meal.builder()
                                .name("Gnocchi with mushrooms & blue cheese")
                                .intolerances(Collections.singletonList(Intolerance.builder()
                                        .intoleranceType(IntoleranceType.FISH).build()))
                                .ingredients("gnocchi," +
                                        "olive oil," +
                                        "butter," +
                                        "onion," +
                                        "mushrooms," +
                                        "garlic," +
                                        "creamy blue cheese")
                                .build(),

                        Meal.builder()
                                .name("Green burgers")
                                .intolerances(Collections.singletonList(Intolerance.builder()
                                        .intoleranceType(IntoleranceType.FISH).build()))
                                .ingredients("olive oil," +
                                        "onion," +
                                        "spinach," +
                                        "cheddar," +
                                        "parmesan," +
                                        "eggs," +
                                        "plain flour")
                                .build()
                        ))
                .description("Soft, creamy goat's cheese or a deliciously strong blue cheese both work well in this easy veggie supper that's on the table in just 20 minutes and Green Burger")
                .organizerId(userList.get(0).getId())
                .build();




        eventAddressService.saveAndUpdateCoordinates(event);
    }
}
