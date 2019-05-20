package com.ideaspace.ideaspace.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "hashtag")
public class Hashtag {
    @Id
    String id;
    String accountId;
    String hashtags;

    public Hashtag() {
    }

    public Hashtag(String hashtags, String accountId) {
        this.hashtags = hashtags;
        this.accountId = accountId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHashtags() {
        return hashtags;
    }

    public void setHashtags(String hashtags) {
        this.hashtags = hashtags;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }
}
