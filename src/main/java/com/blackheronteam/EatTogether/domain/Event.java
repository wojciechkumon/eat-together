package com.blackheronteam.EatTogether.domain;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Builder
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

    @OneToMany(cascade = CascadeType.ALL)
    List<Cuisine> cuisines;

    LocalDateTime dateTime;

    @OneToOne
    Address address;
    Double latitude;
    Double longitude;

    @OneToMany(cascade = CascadeType.ALL)
    List<Meal> meals;


}
