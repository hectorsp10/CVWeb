package com.cvhector.backend.Application.user.services.create;

import com.cvhector.backend.Domain.user.repository.IUserSearch;
import com.cvhector.backend.Domain.user.userEntity.*;

public class UserCreator implements IUserCreator {

    private final IUserSearch repository;

    public UserCreator(IUserSearch repository) {
        this.repository = repository;
    }

    @Override
    public UserCreatorResponse create(UserCreateCommand command) {
        User user = new User(UserID.generate(), new UserName(command.getName()));
        repository.save(user);
        return new UserCreatorResponse(user.getUserID().getValue());
    }
}
