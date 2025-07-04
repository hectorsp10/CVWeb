package com.cvhector.backend.Domain.user.userEntity;

public class UserName {
    private final String value;

    public UserName(String value) {
        if (value == null || value.isEmpty()){
            throw new IllegalArgumentException("UserName value is null or empty");
        }
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
