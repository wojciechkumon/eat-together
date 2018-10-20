package com.blackheronteam.EatTogether;

import com.blackheronteam.EatTogether.service.UserService;
import com.blackheronteam.EatTogether.service.UserServiceImpl;
import com.blackheronteam.EatTogether.service.AddressLookupService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetailsService;

@SpringBootApplication
public class EatTogetherApplication {

    public static void main(String[] args) {
        SpringApplication.run(EatTogetherApplication.class, args);
    }

    @Bean
    public UserService userService() {
        return new UserServiceImpl();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserServiceImpl();
    }

    @Bean
    public AddressLookupService addressLookupService() {
        return new AddressLookupService();
    }
}
