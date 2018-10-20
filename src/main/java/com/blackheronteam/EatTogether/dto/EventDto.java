package com.blackheronteam.EatTogether.dto;

import java.util.List;

import lombok.Data;

@Data
public class EventDto {
    String name;
    String description;
    Long estimatedPrice;
    String currency;

    Long maxParticipants;

    List<String> cuisines;

    String dateTime;

    String streetWithNumber;
    String city;
    String phoneNumber;
    String zip;
    String country;
    List<MealDto> meals;
}
