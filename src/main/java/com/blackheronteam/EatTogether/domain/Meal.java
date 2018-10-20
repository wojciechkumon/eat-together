package com.blackheronteam.EatTogether.domain;

import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
public class Meal {

    @Id
    @GeneratedValue
    Long id;
    String mealName;
    ArrayList<String> ingredients = new ArrayList<>();
    ArrayList<String> intolerances = new ArrayList<>();
//    @OneToMany(targetEntity=Intolerance.class, mappedBy = "id")
//    List<IntoleranceType> intolerances;
}
