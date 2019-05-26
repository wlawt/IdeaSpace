package com.ideaspace.ideaspace.controllers;

import java.util.Optional;

import com.ideaspace.ideaspace.models.Hashtag;
import com.ideaspace.ideaspace.repositories.HashtagRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HashtagController {
    @Autowired
    HashtagRepository hashtagRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/hashtags")
    public Iterable<Hashtag> hashtag() {
        // Return all hashtags from database
        return hashtagRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/hashtags")
    public Hashtag save(@RequestBody Hashtag hashtag) {
        // Save hashtag info to database
        hashtagRepository.save(hashtag);

        return hashtag;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/hashtags/{id}")
    public String delete(@PathVariable String id) {
        // Delete hashtag by ID
        Optional<Hashtag> optHashtag = hashtagRepository.findById(id);
        Hashtag hashtag = optHashtag.get();

        hashtagRepository.delete(hashtag);

        return "";
    }
}