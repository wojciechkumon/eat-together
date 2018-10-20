package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.Event;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Log4j2
@Service(value = "nearbyService")
public class NearbyService {

    public static final BigDecimal RANGE = BigDecimal.valueOf(0.091468); // 10 km

    // find nearby

    public List<Event> findNearbyToMe()  {
        return null;
    }
}
