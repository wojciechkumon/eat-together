package com.blackheronteam.EatTogether.service;

import com.blackheronteam.EatTogether.domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "userService")
public interface UserService extends UserDetailsService {
    List<User> findAllUsers();

    User findById(long id);

    boolean isUserExist(User user);

    void saveUser(User user);

    void updateUser(User currentUser);

    void dropUsers();
}
