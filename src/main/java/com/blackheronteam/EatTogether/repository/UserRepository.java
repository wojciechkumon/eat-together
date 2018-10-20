package com.blackheronteam.EatTogether.repository;

import com.blackheronteam.EatTogether.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findUserByUsername(String username);
}
