package com.blackheronteam.EatTogether.domain;

import lombok.Builder;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Builder
@Data
public class Meal {

    @Id
    @GeneratedValue
    Long id;
    String name;
    String ingredients;
    @OneToMany(cascade = CascadeType.ALL)
    List<Intolerance> intolerances;
}
