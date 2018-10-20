package com.blackheronteam.EatTogether;

import com.blackheronteam.EatTogether.domain.UserService;
import com.blackheronteam.EatTogether.domain.UserServiceInMemoryServiceImpl;
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
        return new UserServiceInMemoryServiceImpl();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserServiceInMemoryServiceImpl();
    }

    @Bean
    public AddressLookupService addressLookupService() {
        return new AddressLookupService();
    }
}
