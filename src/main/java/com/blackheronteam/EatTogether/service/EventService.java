package com.blackheronteam.EatTogether.service;


import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.domain.User;
import com.blackheronteam.EatTogether.repository.EventRepository;
import com.blackheronteam.EatTogether.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@RequiredArgsConstructor
@Service
public class EventService {
    private final EventRepository eventRepository;
    private final UserRepository userRepository;


    public void joinEvent(Long eventId, String userName) {
        User user = userRepository.findUserByUsername(userName);
        Event event = eventRepository.findById(eventId).get();
        event.getParticipants().add(user);
        event.setParticipants(event.getParticipants());
        eventRepository.save(event);


    }
}
