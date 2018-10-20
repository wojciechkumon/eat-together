package com.blackheronteam.EatTogether.domain;

import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
@Builder
public class Intolerance {

    @Id
    @GeneratedValue
    Long id;

    @Enumerated(EnumType.STRING)
    IntoleranceType intoleranceType;
}
