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
                                .ingredients("2 x 400g packs fresh gnocchi\n" +
                                        "1 tbsp olive oil\n" +
                                        "knob of butter\n" +
                                        "1 large onion\n" +
                                        "500g small Forestière or Portobello mushrooms, sliced\n" +
                                        "2 large garlic cloves, chopped\n" +
                                        "150g pack creamy blue cheese (we used Danish blue)\n" +
                                        ", chopped").build(),

                        Meal.builder()
                                .name("Green burgers")
                                .intolerances(Collections.singletonList(Intolerance.builder()
                                        .intoleranceType(IntoleranceType.FISH).build()))
                                .ingredients("2 tbsp olive oil\n" +
                                        "2 onions\n" +
                                        ", finely chopped\n" +
                                        "250g bag spinach\n" +
                                        "good grating of fresh nutmeg\n" +
                                        "100g mature cheddar, grated\n" +
                                        "40g parmesan\n" +
                                        ", finely grated\n" +
                                        "1-2 large eggs, beaten\n" +
                                        "3 tbsp plain flour").build()

                        ))
                .description("Soft, creamy goat's cheese or a deliciously strong blue cheese both work well in this easy veggie supper that's on the table in just 20 minutes and Green Burger")
                .organizerId(userList.get(0).getId())
                .build();




        eventAddressService.saveAndUpdateCoordinates(event);
    }
}
