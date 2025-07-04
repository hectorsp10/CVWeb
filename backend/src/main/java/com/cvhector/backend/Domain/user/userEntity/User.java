package com.cvhector.backend.Domain.user.userEntity;

public class User {
    private final UserID userID;
    private final UserName userName;

    public User(final UserID userID, final UserName userName) {
        this.userID = userID;
        this.userName = userName;
    }

    public UserID getUserID() {
        return userID;
    }

    public UserName getUserName() {
        return userName;
    }
}
