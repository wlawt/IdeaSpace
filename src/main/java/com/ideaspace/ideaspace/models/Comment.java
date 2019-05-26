package com.ideaspace.ideaspace.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// Comment database structure
@Document(collection = "comments")
public class Comment {
    @Id
    String id;
    String postId;
    String accountId;
    String comment;
    int like = 0;
    ArrayList<String> likes = new ArrayList<>();
    int dislike = 0;

    public Comment() {
    }

    public Comment(String id, String postId, ArrayList<String> likes, String accountId, String comment, int like,
            int dislike) {
        this.postId = postId;
        this.accountId = accountId;
        this.comment = comment;
        this.like = like;
        this.likes = likes;
        this.dislike = dislike;
    }

    /* GETTER AND SETTER functions */
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

    public int getLikes() {
        return likes.size();
    }

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
        this.like = this.like + 1;
    }

    public int getDislike() {
        return dislike;
    }

    public void setDislike(int dislike) {
        this.dislike = dislike;
    }

}
