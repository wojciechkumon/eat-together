package com.blackheronteam.EatTogether.domain;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Arrays;
import java.util.List;

public class UserServiceInMemoryServiceImpl implements UserService {
    private static final List<User> user = Arrays.asList(
            new User("gab", "asdf", "Gaba", "B."),
            new User("mic", "asdf1", "Michal", "B."),
            new User("prz", "asdf2", "Przemek", "F."),
            new User("woj", "asdf3", "WOjtek", "K.")


    );


    @Override
    public List<User> findAllUsers() {
        return user;
    }

    @Override
    public User findById(long id) {
        return null;
    }

    @Override
    public boolean isUserExist(User user) {
        return false;
    }

    @Override
    public void saveUser(User user) {

    }

    @Override
    public void updateUser(User currentUser) {

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
