package com.ideaspace.ideaspace.controllers;

import java.util.Optional;

import com.ideaspace.ideaspace.models.User;
import com.ideaspace.ideaspace.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    // Get all users from database
    @RequestMapping(method = RequestMethod.GET, value = "/users")
    public Iterable<User> user() {
        return userRepository.findAll();
    }

    // Delete user account
    @RequestMapping(method = RequestMethod.DELETE, value = "/users/{id}")
    public String delete(@PathVariable String id) {
        Optional<User> optUser = userRepository.findById(id);
        User user = optUser.get();
        userRepository.delete(user);

        return "";
    }
}