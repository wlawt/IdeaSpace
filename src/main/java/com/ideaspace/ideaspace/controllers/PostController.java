package com.ideaspace.ideaspace.controllers;

import com.ideaspace.ideaspace.models.Post;
import com.ideaspace.ideaspace.repositories.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
public class PostController {
    @Autowired
    PostRepository postRepository;

    /*
     * Route: /posts Status: PUBLIC FUNC: Get listings of all posts
     */
    @RequestMapping(method = RequestMethod.GET, value = "/posts")
    public Iterable<Post> post() {
        return postRepository.findAll();
    }

    /*
     * Route: /posts Status: PRIVATE FUNC: Add a post
     */
    // TODO ~ MAKE PRIVATE
    @RequestMapping(method = RequestMethod.POST, value = "/posts")
    public Post save(@RequestBody Post post) {
        postRepository.save(post);

        return post;
    }

    /*
     * Route: /posts/:id Status: PUBLIC FUNC: Update post by id
     */
    @RequestMapping(method = RequestMethod.PUT, value = "/posts/{id}")
    public Post update(@PathVariable String id, @RequestBody Post post) {
        Optional<Post> optPost = postRepository.findById(id);
        Post p = optPost.get();

        // Setting fields from database
        if (post.getName() != null)
            p.setName(post.getName());
        if (post.getTitle() != null)
            p.setTitle(post.getTitle());
        if (post.getSubTitle() != null)
            p.setSubTitle(post.getSubTitle());
        if (post.getBody() != null)
            p.setBody(post.getBody());
        if (post.getImageURL() != null)
            p.setImageURL(post.getImageURL());

        postRepository.save(p);

        return p;
    }

    /*
     * Route: /posts/:id Status: PUBLIC FUNC: Get post by ud
     */
    @RequestMapping(method = RequestMethod.GET, value = "/posts/{id}")
    public Optional<Post> show(@PathVariable String id) {
        return postRepository.findById(id);
    }

    /*
     * Route: /posts/:id Status: PUBLIC FUNC: Delete post by id
     */
    // TODO ~ MAKE PRIVATE
    @RequestMapping(method = RequestMethod.DELETE, value = "/posts/{id}")
    public String delete(@PathVariable String id) {
        Optional<Post> optPost = postRepository.findById(id);
        Post post = optPost.get();
        postRepository.delete(post);

        return "";
    }

}