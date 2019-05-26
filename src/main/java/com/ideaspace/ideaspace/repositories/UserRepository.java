package com.ideaspace.ideaspace.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ideaspace.ideaspace.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    // Delete function
    @Override
    void delete(User deleted);

    // Find user by email (for frontend)
    User findByEmail(String email);
}