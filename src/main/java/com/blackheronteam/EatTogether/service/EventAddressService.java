package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.Event;
import com.blackheronteam.EatTogether.repository.EventRepository;
import com.mapbox.geojson.Point;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.function.Consumer;

@Log4j2
@Service(value = "eventAddressService")
public class EventAddressService {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    AddressLookupService addressLookupService;

    public void updateEventAddressCoordinates(final Event event) {
        var eventAddress = event.getAddress();
        var addressQuery = eventAddress.convertToQuery();

        Consumer<Point> updateCoordinates = point -> {
            log.info("updating coordinates :" + point.toString() +
                    " for address " + eventAddress.toString() +
                    " for event " + event.toString());

            event.setLatitude(point.latitude());
            event.setLongitude(point.longitude());

            eventRepository.save(event);
        };

        addressLookupService.getMap(addressQuery, updateCoordinates);
    }
}
