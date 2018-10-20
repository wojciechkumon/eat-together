package com.blackheronteam.EatTogether.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Address {

    @Id
    @GeneratedValue
    Long id;
    String streetWithNumber;
    String city;
    String phoneNumber;
    String zip;
    String country;


    // eg plac Europejski 1 00-844 Warszawa
    public String convertToQuery() {
        return streetWithNumber + " " +
                zip + " " +
                city + " " +
                country;
    }

}
