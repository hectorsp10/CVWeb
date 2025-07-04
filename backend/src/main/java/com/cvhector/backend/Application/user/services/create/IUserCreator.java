package com.cvhector.backend.Application.user.services.create;

public interface IUserCreator {
    UserCreatorResponse create(UserCreateCommand command);
}
