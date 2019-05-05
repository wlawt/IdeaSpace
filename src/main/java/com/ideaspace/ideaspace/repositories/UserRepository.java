package com.ideaspace.ideaspace.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ideaspace.ideaspace.models.User;

public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);
}