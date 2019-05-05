package com.ideaspace.ideaspace.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comments")
public class Comment {
    @Id
    String commentId;
    String id;
    /* String name; */
    String comment;
    int like = 0;
    int dislike = 0;

    public Comment() {
    }

    public Comment(String id, String commentId, String comment, int like, int dislike) {
        /* this.name = name; */
        this.commentId = commentId;
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

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
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
