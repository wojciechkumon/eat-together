package com.blackheronteam.EatTogether.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@ToString
@Setter
@Getter
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

    LocalDateTime dateTime;

    @OneToOne
    Address address;
    Double latitude;
    Double longitude;
}
