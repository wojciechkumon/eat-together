package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.service.UserService;
import com.blackheronteam.EatTogether.service.AddressLookupService;
import com.mapbox.api.geocoding.v5.models.GeocodingResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import retrofit2.Response;

import java.io.IOException;

@RestController
@RequestMapping("/internal")
@Log4j2
public class InternalApiController {

    @Autowired
    AddressLookupService addressLookupService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/me", method = RequestMethod.GET)
    public UserDetails getInfoAboutMe() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = userService.loadUserByUsername(authentication.getName());
        return userDetails;
    }

    @PostMapping("/coordinates")
    public Response<GeocodingResponse> getMap(@RequestParam("query") String query) throws IOException {
        return addressLookupService.getMap(query);
    }

}