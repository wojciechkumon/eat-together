package com.blackheronteam.EatTogether.repository;

import com.blackheronteam.EatTogether.domain.Cuisine;
import org.springframework.data.repository.CrudRepository;

public interface CuisineRepository extends CrudRepository<Cuisine, Long> {
}
