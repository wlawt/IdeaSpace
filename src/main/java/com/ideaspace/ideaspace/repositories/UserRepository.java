package com.ideaspace.ideaspace.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ideaspace.ideaspace.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    @Override
    void delete(User deleted);

    User findByEmail(String email);
}