package com.ideaspace.ideaspace.controllers;

import java.util.Optional;

import com.ideaspace.ideaspace.models.Profile;
import com.ideaspace.ideaspace.repositories.ProfileRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {
    @Autowired
    ProfileRepository profileRepository;

    /*
     * Route: /createprofile Status: PUBLIC FUNC: Update profile database
     */
    /*
     * Route: /displayprofile Status: PUBLIC FUNC: Get listings of profiles
     */
    @RequestMapping(method = RequestMethod.GET, value = "/profile")
    public Iterable<Profile> profile() {
        return profileRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/profile/{id}")
    public Profile save(@RequestBody Profile profile) {
        profileRepository.save(profile);

        return profile;
    }

    /*
     * Route: /profile/:id Status: PUBLIC FUNC: Display profile by id (for sharing
     * links)
     */
    @RequestMapping(method = RequestMethod.GET, value = "/profile/{id}")
    public Optional<Profile> show(@PathVariable String id) {
        return profileRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/profile/{id}")
    public String delete(@PathVariable String id) {
        Optional<Profile> optProfile = profileRepository.findById(id);
        Profile profile = optProfile.get();
        profileRepository.delete(profile);

        return "";
    }
}