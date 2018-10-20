package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserRate {

    @Id
    @GeneratedValue
    Long id;
    Long userId;
    Long rate;
    String description;
}
