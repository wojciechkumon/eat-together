package com.blackheronteam.EatTogether.repository;

import com.blackheronteam.EatTogether.domain.Event;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EventRepository extends CrudRepository<Event, Long> {
    List<Event> findByOrganizerId(Long id);
}
