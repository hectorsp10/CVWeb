package com.cvhector.backend.Domain.user.userEntity;

import java.util.UUID;
import java.util.Objects;

public class UserID {
    private final String value;

    public UserID(String value) {
        if (value == null || value.isBlank()) throw new IllegalArgumentException("ID inválido");
        this.value = value;
    }

    public static UserID generate() {
        return new UserID(UUID.randomUUID().toString());
    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof UserID && ((UserID) o).value.equals(this.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
