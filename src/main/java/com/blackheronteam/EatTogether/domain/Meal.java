package com.blackheronteam.EatTogether.domain;

import lombok.Builder;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Builder
public class Meal {

    @Id
    @GeneratedValue
    Long id;
    String mealName;
    String ingredients;
    @OneToMany(cascade = CascadeType.ALL)
    List<Intolerance> intolerances;
//    @OneToMany(targetEntity=Intolerance.class, mappedBy = "id")
//    List<IntoleranceType> intolerances;
}
