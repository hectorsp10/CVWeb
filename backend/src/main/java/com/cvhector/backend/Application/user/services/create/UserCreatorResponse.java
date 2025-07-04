package com.cvhector.backend.Application.user.services.create;

public class UserCreatorResponse {
    private final String id;

    public UserCreatorResponse(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}
