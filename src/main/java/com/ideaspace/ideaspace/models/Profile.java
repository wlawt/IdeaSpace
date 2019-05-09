package com.ideaspace.ideaspace.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "profile")
public class Profile {
    @Id
    String id;
    String accountId;
    String profilePic;
    String bgPic;
    String bioInfo;

    public Profile() {
    }

    public Profile(String id, String accountId, String profilePic, String bgPic, String bioInfo) {
        this.id = id;
        this.accountId = accountId;
        this.profilePic = profilePic;
        this.bgPic = bgPic;
        this.bioInfo = bioInfo;
    }

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

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public String getBgPic() {
        return bgPic;
    }

    public void setBgPic(String bgPic) {
        this.bgPic = bgPic;
    }

    public String getBioInfo() {
        return bioInfo;
    }

    public void setBioInfo(String bioInfo) {
        this.bioInfo = bioInfo;
    }
}