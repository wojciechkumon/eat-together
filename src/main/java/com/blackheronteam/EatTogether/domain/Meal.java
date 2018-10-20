package com.blackheronteam.EatTogether.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Meal {

    @Id
    @GeneratedValue
    Long id;
    String name;
    String ingredients;
    @OneToMany(cascade = CascadeType.ALL)
    List<Intolerance> intolerances;
}
