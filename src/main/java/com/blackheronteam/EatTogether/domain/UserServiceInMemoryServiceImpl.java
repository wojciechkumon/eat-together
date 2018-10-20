package com.blackheronteam.EatTogether.domain;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.List;

@Log4j2
public class UserServiceInMemoryServiceImpl implements UserService {
    private static final List<User> users = Arrays.asList(
            new User("gab", "asdf", "Gaba", "B."),
            new User("mic", "asdf1", "Michal", "B."),
            new User("prz", "asdf2", "Przemek", "F."),
            new User("woj", "asdf3", "WOjtek", "K.")


    );


    @Autowired
    BCryptPasswordEncoder encoder;


    @Override
    public List<User> findAllUsers() {
        return users;
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
        log.info("loading by username " + username);
        return users.stream().map(u ->
                new User(u.getUsername(), encoder.encode(u.getPassword()),u.getFirstName(), u.getLastName()))
                .filter(u -> u.getUsername().equals(username)).findAny().orElse(null);
    }

    private List getAuthority() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
    }


}
