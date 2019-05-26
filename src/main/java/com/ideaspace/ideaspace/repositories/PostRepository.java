package com.ideaspace.ideaspace.repositories;

import com.ideaspace.ideaspace.models.Post;
import org.springframework.data.repository.CrudRepository;

// Delete function
public interface PostRepository extends CrudRepository<Post, String> {
    @Override
    void delete(Post deleted);
}