package com.ideaspace.ideaspace.controllers;

import java.util.Optional;

import com.ideaspace.ideaspace.models.Comment;
import com.ideaspace.ideaspace.repositories.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {
    @Autowired
    CommentRepository commentRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/comments")
    public Iterable<Comment> comment() {
        // Return all comments
        return commentRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/comments/{id}")
    public Comment save(@RequestBody Comment comment) {
        // Save data that comes from the frontend
        commentRepository.save(comment);

        return comment;
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/comments/{id}")
    public Comment update(@PathVariable String id, @RequestBody Comment comment) {
        // Update comment to respected post ID
        Optional<Comment> optLike = commentRepository.findById(id);
        Comment c = optLike.get();

        c.setLike(comment.getLike());
        commentRepository.save(c);

        return c;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/comments/{id}")
    public Optional<Comment> show(@PathVariable String id) {
        // Show the comments with respect to the specific post
        return commentRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/comments/{id}")
    public String delete(@PathVariable String id) {
        // Delete comment by ID
        Optional<Comment> optComment = commentRepository.findById(id);
        Comment comment = optComment.get();
        commentRepository.delete(comment);

        return "";
    }
}