package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Data;

@Entity
@Builder
@Data
public class Cuisine {

    @Id
    @GeneratedValue
    Long id;

    @Enumerated(EnumType.STRING)
    CuisineType cuisineType;
}
