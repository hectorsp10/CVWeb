package com.cvhector.backend.Application.user.services.create;

public class UserCreateCommand {
    private final String name;

    public UserCreateCommand(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
