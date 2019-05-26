package com.ideaspace.ideaspace.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ideaspace.ideaspace.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
    // Delete function
    @Override
    void delete(Role deleted);

    // Get role
    Role findByRole(String role);
}