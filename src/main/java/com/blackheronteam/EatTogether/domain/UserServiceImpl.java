package com.blackheronteam.EatTogether.domain;

import com.blackheronteam.EatTogether.repository.AddressRepository;
import com.blackheronteam.EatTogether.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

@Log4j2
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AddressRepository addressRepository;

    @Override
    public List<User> findAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
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
        addressRepository.save(user.getAddress());
        userRepository.save(user);
    }

    @Override
    public void updateUser(User currentUser) {

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("loading by username " + username);
        User user = userRepository.findUserByUsername(username);
        log.info(user);
        return userRepository.findUserByUsername(username);
    }

    @Override
    public void dropUsers() {
        userRepository.deleteAll();
    }

}
