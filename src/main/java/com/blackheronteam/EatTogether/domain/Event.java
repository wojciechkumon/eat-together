package com.blackheronteam.EatTogether.domain;

import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@ToString
@Setter
public class Event {

    @Id
    @GeneratedValue
    Long id;
    Long organizerId;
    Long numberOfParticipants;
    BigDecimal estimatedPrice;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="Currency" , referencedColumnName="id",nullable=false)
    Currency currency;
    String cousineType;
    String description;
    Double latitude;
    Double longitude;
    String name;
}
