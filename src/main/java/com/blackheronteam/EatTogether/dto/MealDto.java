package com.blackheronteam.EatTogether.dto;

import com.blackheronteam.EatTogether.domain.IntoleranceType;
import lombok.Data;

import java.util.List;

@Data
public class MealDto {

    String name;
    String ingredients;
    List<IntoleranceType> intolerances;
}
