package com.ideaspace.ideaspace.controllers;

import com.ideaspace.ideaspace.models.Role;
import com.ideaspace.ideaspace.repositories.RoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoleController {
    @Autowired
    RoleRepository roleRepository;

    // For auth purposes
    @RequestMapping(method = RequestMethod.GET, value = "/roles")
    public Iterable<Role> role() {
        return roleRepository.findAll();
    }
}