package com.ideaspace.ideaspace.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// Posts database structures
@Document(collection = "posts")
public class Post {
    @Id
    String id;
    String accountId;
    String name;
    String title;
    String subTitle;
    String body;
    String hashtag;
    String imageURL;

    public Post() {
    }

    public Post(String accountId, String name, String title, String subTitle, String body, String hashtag,
            String imageURL) {
        this.accountId = accountId;
        this.name = name;
        this.title = title;
        this.subTitle = subTitle;
        this.body = body;
        this.hashtag = hashtag;
        this.imageURL = imageURL;
    }

    /* GETTER AND SETTER functions */
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getHashtag() {
        return hashtag;
    }

    public void setHashtag(String hashtag) {
        this.hashtag = hashtag;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

}