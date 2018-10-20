package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.domain.User;
import com.blackheronteam.EatTogether.domain.UserService;
import com.blackheronteam.EatTogether.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class InitUsersService {

    @Autowired
    private UserService userService;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    BCryptPasswordEncoder encoder;

    public InitUsersService() {
    }

    @PostConstruct
    public void init() {
        initUsers();
    }

    private void initUsers() {
        userService.dropUsers();
        addressRepository.deleteAll();
        userService.saveUser(User.builder()
                .firstName("Michal")
                .lastName("B.")
                .username("mic@gmail.com")
                .password(encoder.encode("asdf1"))
                .address(Address.builder().city("Krk").build())
        .build());
        userService.saveUser(User.builder()
                .firstName("Przemek")
                .lastName("F.")
                .username("prz@gmail.com")
                .password(encoder.encode("asdf2"))
                .address(Address.builder().city("Krk").build())
                .build());
        userService.saveUser(User.builder()
                .firstName("Gaba")
                .lastName("B.")
                .username("gab@gmail.com")
                .password(encoder.encode("asdf"))
                .address(Address.builder().city("Krk").build())
                .build());
        userService.saveUser(User.builder()
                .firstName("Wojtek")
                .lastName("K.")
                .username("woj@gmail.com")
                .password(encoder.encode("asdf3"))
                .address(Address.builder().city("Krk").build())
                .build());
    }
}
