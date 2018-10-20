package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Builder;

@Entity
@Builder
public class Address {

    @Id
    @GeneratedValue
    Long id;
    String streetWithNumber;
    String city;
    String phoneNumber;
    String zip;
    String country;
}
