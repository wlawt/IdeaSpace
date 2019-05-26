package com.ideaspace.ideaspace.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ideaspace.ideaspace.models.Profile;

// Delete function
public interface ProfileRepository extends MongoRepository<Profile, String> {
    @Override
    void delete(Profile deleted);
}