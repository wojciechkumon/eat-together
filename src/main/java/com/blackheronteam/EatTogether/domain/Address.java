package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Address {

    @Id
    @GeneratedValue
    Long id;
    String street;
    String houseNumber;
    String city;
    String zip;
    String phoneNumber;
    String country;
}
