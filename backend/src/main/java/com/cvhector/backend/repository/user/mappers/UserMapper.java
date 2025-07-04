package com.cvhector.backend.repository.user.mappers;

import com.cvhector.backend.Domain.user.userEntity.User;
import com.cvhector.backend.Domain.user.userEntity.UserID;
import com.cvhector.backend.Domain.user.userEntity.UserName;
import com.cvhector.backend.repository.user.entities.UserEntity;

public class UserMapper {
    public static UserEntity toEntity(User user) {
        return new UserEntity(user.getUserID().getValue(), user.getUserName().getValue());
    }

    public static User toDomain(UserEntity entity) {
        return new User(
            new UserID(entity.getUserID()),
            new UserName(entity.getUserName()));
    }
}
