package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.math.BigInteger;

@Entity
public class Event {

    @Id
    @GeneratedValue
    Long id;
    Long organizerId;
    Long numberOfParticipants;
    BigInteger estimatedPrice;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="Currency" , referencedColumnName="id",nullable=false)
    Currency currency;
    String cousineType;
    String description;
    Double latitude;
    Double longitude;
}
