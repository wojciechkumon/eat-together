package com.blackheronteam.EatTogether.controller;

import com.blackheronteam.EatTogether.domain.User;
import com.blackheronteam.EatTogether.domain.UserService;
import com.blackheronteam.EatTogether.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @RequestMapping(value="/users", method = RequestMethod.GET)
    public List listUser(){
        return userService.findAllUsers();
    }

    @RequestMapping("/add")
    public User addUser() {
        User user = User.builder().firstName("asd").lastName("asd").build();
        userRepository.save(user);
        return user;
    }

}