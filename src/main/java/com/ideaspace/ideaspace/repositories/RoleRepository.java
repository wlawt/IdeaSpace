package com.ideaspace.ideaspace.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ideaspace.ideaspace.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
    @Override
    void delete(Role deleted);

    Role findByRole(String role);
}