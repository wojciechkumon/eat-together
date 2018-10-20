package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class Event {

    @Id
    @GeneratedValue
    Long id;
    Long organizerId;
    Long numberOfParticipants;
    BigInteger estimatedPrice;
    String cousineType;
    String description;
    Double latitude;
    Double longitude;
}
