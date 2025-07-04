package com.cvhector.backend.Domain.user.repository;

import com.cvhector.backend.Domain.user.userEntity.User;
import com.cvhector.backend.Domain.user.userEntity.UserID;

import java.util.Optional;

public interface IUserSearch {
    Optional<User> findById(UserID id);
    void save(User user);
}
