package com.ideaspace.ideaspace.repositories;

import com.ideaspace.ideaspace.models.Hashtag;
import org.springframework.data.repository.CrudRepository;

// Delete function
public interface HashtagRepository extends CrudRepository<Hashtag, String> {
    @Override
    void delete(Hashtag deleted);
}