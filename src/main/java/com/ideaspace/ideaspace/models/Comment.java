package com.ideaspace.ideaspace.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comments")
public class Comment {
    @Id
    String id;
    String postId;
    String accountId;
    /* String name; */
    String comment;
    int like = 0;
    int dislike = 0;

    public Comment() {
    }

    public Comment(String id, String postId, String accountId, String comment, int like, int dislike) {
        /* this.name = name; */
        this.postId = postId;
        this.accountId = accountId;
        this.comment = comment;
        this.like = like;
        this.dislike = dislike;
    }

    /* GETT AND SETTER */
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    /*
     * public String getName() { return name; }
     * 
     * public void setName(String name) { this.name = name; }
     */

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getLike() {
        return like;
    }

    public void setLike(int like) {
        this.like = like + 1;
    }

    public int getDislike() {
        return dislike;
    }

    public void setDislike(int dislike) {
        this.dislike = dislike;
    }

}
