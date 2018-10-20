package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/internal")
public class InternalApiController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/me", method = RequestMethod.GET)
    public UserDetails getInfoAboutMe() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = userService.loadUserByUsername(authentication.getName());
        return userDetails;
    }
}