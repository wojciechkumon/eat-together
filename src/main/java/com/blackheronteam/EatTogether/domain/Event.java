package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Setter
public class Event {

    @Id
    @GeneratedValue
    Long id;
    String name;
    String description;
    Long estimatedPrice;
    String currency;

    Long organizerId;
    Long maxParticipants;

    @Enumerated(EnumType.STRING)
    Cuisine cuisine;

    @OneToOne
    Address address;
    Double latitude;
    Double longitude;
}
