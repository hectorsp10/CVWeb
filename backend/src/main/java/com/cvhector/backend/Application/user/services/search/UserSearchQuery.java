package com.cvhector.backend.Application.user.services.search;

public class UserSearchQuery {
    private final String id;

    public UserSearchQuery(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}
