package com.blackheronteam.EatTogether.repository;

import com.blackheronteam.EatTogether.domain.Meal;
import org.springframework.data.repository.CrudRepository;

public interface MealRepository extends CrudRepository<Meal, Long> {
}
