package com.blackheronteam.EatTogether.dto;

import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MyEvent {
    User organizer;
    Event event;
}
