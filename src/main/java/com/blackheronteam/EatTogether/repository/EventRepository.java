package com.blackheronteam.EatTogether.repository;

import com.blackheronteam.EatTogether.domain.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Long> {
}
