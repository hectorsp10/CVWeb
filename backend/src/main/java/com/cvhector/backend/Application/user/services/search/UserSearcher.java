package com.cvhector.backend.Application.user.services.search;

import com.cvhector.backend.Domain.user.repository.IUserSearch;
import com.cvhector.backend.Domain.user.userEntity.*;
import org.springframework.stereotype.Service;

@Service
public class UserSearcher implements IUserSearcher{
    private final IUserSearch repository;

    public UserSearcher(IUserSearch repository) {
        this.repository = repository;
    }

    @Override
    public UserSearcherResponse search(UserSearchQuery query) {
        User user = repository.findById(new UserID(query.getId()))
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return new UserSearcherResponse(user.getUserID().getValue(), user.getUserName().getValue());
    }
}
