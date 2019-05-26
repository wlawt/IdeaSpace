package com.ideaspace.ideaspace.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// Profile database structure
@Document(collection = "profile")
public class Profile {
    @Id
    String accountId;
    String id;
    String profilePic;
    String bgPic;
    String bioInfo;
    String instagram;
    String github;
    String facebook;
    String linkedin;
    String fullname;

    public Profile() {
    }

    public Profile(String accountId, String id, String fullname, String profilePic, String bgPic, String bioInfo,
            String instagram, String github, String facebook, String linkedin) {
        this.accountId = accountId;
        this.id = id;
        this.profilePic = profilePic;
        this.bgPic = bgPic;
        this.bioInfo = bioInfo;
        this.instagram = instagram;
        this.facebook = facebook;
        this.github = github;
        this.linkedin = linkedin;
        this.fullname = fullname;
    }

    /* GETTER AND SETTER functions */
    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
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

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }
}