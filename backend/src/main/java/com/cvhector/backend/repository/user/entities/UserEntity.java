package com.cvhector.backend.repository.user.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    private String id;

    private String name;

    public UserEntity() {}

    public UserEntity(String id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getters y setters
    public String getUserID() { return id; }
    public String getUserName() { return name; }

    public void setUserId(String id) { this.id = id; }
    public void setUserName(String name) { this.name = name; }
}
