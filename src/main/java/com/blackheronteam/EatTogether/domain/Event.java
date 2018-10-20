package com.blackheronteam.EatTogether.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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

    @OneToMany
    List<Cuisine> cuisines;

    @OneToOne
    Address address;
    Double latitude;
    Double longitude;
}
