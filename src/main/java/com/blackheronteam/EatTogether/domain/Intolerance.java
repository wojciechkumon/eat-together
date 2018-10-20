package com.blackheronteam.EatTogether.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Intolerance {

    @Id
    @GeneratedValue
    Long id;

    @Enumerated(EnumType.STRING)
    IntoleranceType intoleranceType;
}
