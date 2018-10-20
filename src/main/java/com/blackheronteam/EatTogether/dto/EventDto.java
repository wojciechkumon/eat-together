package com.blackheronteam.EatTogether.dto;

import com.blackheronteam.EatTogether.domain.Cuisine;

import lombok.Data;

@Data
public class EventDto {
    String name;
    String description;
    Long estimatedPrice;
    String currency;

    Long organizerId;
    Long maxParticipants;

    Cuisine cuisine;

    String streetWithNumber;
    String city;
    String phoneNumber;
    String zip;
    String country;
}
