package com.ideaspace.ideaspace.repositories;

import com.ideaspace.ideaspace.models.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, String> {
    @Override
    void delete(Comment deleted);
}