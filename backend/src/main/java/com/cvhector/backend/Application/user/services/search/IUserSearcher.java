package com.cvhector.backend.Application.user.services.search;

public interface IUserSearcher {
    UserSearcherResponse search(UserSearchQuery query);
}
