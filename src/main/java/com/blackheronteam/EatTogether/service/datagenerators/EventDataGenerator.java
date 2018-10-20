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
        List<User> userList = userService.findAllUsers().stream().filter(u -> !u.getUsername().equals("woj@gmail.com")).collect(Collectors.toList());

        Event event = Event.builder()
                .cuisines(Arrays.asList(
                        Cuisine.builder().cuisineType(CuisineType.VEGE).build(),
                        Cuisine.builder().cuisineType(CuisineType.BURGERS).build()))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("730 714 ***")
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

        Event event_2 = Event.builder()
                .cuisines(Arrays.asList(
                        Cuisine.builder().cuisineType(CuisineType.DUMPLINGS).build()))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("604 754 ***")
                        .streetWithNumber("Zelazna 59")
                        .country("Polska")
                        .zip("00-848\"").build())
                .currency("PLN")
                .dateTime(LocalDateTime.of(2018, 10, 30, 14, 00))
                .estimatedPrice(15L)
                .maxParticipants(4L)
                .name("Traditional polish dinner")
                .meals(Arrays.asList(
                        Meal.builder()
                                .name("Homemade Dumplings")
                                .intolerances(Collections.singletonList(Intolerance.builder()
                                        .intoleranceType(IntoleranceType.FISH).build()))
                                .ingredients("four," +
                                        "vegetable oil," +
                                        "parsley ," +
                                        "pork," +
                                        "cabbage,")
                                .build(),
                        Meal.builder()
                                .name("Broth ")
                                .intolerances(Collections.singletonList(Intolerance.builder()
                                        .intoleranceType(IntoleranceType.FISH).build()))
                                .ingredients("chicken," +
                                        "celery," +
                                        "carrots," +
                                        "onion," +
                                        "garlic," +
                                        "parsley," +
                                        "thyme")
                                .build()
                ))
                .description("Nothing soothes, nourishes and comforts like homemade chicken broth. Dumplings filled with tender pork, flavored with fresh ginger, green onion, and sesame oil. ")
                .organizerId(userList.get(2).getId())
                .build();

        Event event_3 = Event.builder()
                .cuisines(Arrays.asList(
                        Cuisine.builder().cuisineType(CuisineType.VEGE).build(),
                        Cuisine.builder().cuisineType(CuisineType.CAKE).build()))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("500 430 ***")
                        .country("Polska")
                        .streetWithNumber("Chmielna 26")
                        .zip("00-844").build())
                .currency("EUR")
                .dateTime(LocalDateTime.of(2018, 11, 02, 13, 00))
                .estimatedPrice(15L)
                .maxParticipants(3L)
                .name("Healthy dessert")
                .meals(Arrays.asList(
                        Meal.builder()
                                .name("VEGAN & GLUTEN-FREE CHOCOLATE CHIP COOKIES")
                                .intolerances(Arrays.asList(
                                        Intolerance.builder().intoleranceType(IntoleranceType.GLUTEN).build(),
                                        Intolerance.builder().intoleranceType(IntoleranceType.NUTS).build()))
                                .ingredients("gluten-free oat flour, " +
                                        "coconut sugar, " +
                                        "chia eggs, " +
                                        "melted coconut oil, " +
                                        "vanilla extract, " +
                                        "salt, " +
                                        "dark chocolate chips")
                                .build()
                ))
                .description("cookies are lightly sweetened, with a crisp outside and soft, tender inside– just the way you like them")
                .organizerId(userList.get(1).getId())
                .build();

        Event event_4 = Event.builder()
                .cuisines(Collections.singletonList(Cuisine.builder().cuisineType(CuisineType.PASTA).build()))
                .address(Address.builder()
                        .city("Warszawa")
                        .phoneNumber("500 430 ***")
                        .country("Polska")
                        .streetWithNumber("Wybrzeze Kosciuszkowskie 20")
                        .zip("00-390").build())
                .currency("EUR")
                .dateTime(LocalDateTime.of(2018, 11, 12, 15, 00))
                .estimatedPrice(150L)
                .maxParticipants(2L)
                .name("Italian pasta")
                .meals(Arrays.asList(
                        Meal.builder()
                                .name("Spaghetti Bolognese")
                                .intolerances(Collections.singletonList(
                                        Intolerance.builder().intoleranceType(IntoleranceType.FISH).build()))
                                .ingredients("olive oil, " +
                                        "smoked streaky bacon, " +
                                        "onions, " +
                                        "carrots, " +
                                        "garlic cloves, " +
                                        "beef mince")
                                .build()
                ))
                .description("Our best ever spaghetti Bolognese is super easy and a true Italian classic with a meaty, chilli sauce.")
                .organizerId(userList.get(1).getId())
                .build();

        eventAddressService.saveAndUpdateCoordinates(event);
        eventAddressService.saveAndUpdateCoordinates(event_2);
        eventAddressService.saveAndUpdateCoordinates(event_3);
        eventAddressService.saveAndUpdateCoordinates(event_4);
    }
}