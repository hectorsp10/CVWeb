package com.cvhector.backend.infrastructure.user;

import com.cvhector.backend.Application.user.services.search.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserRestController {

    private final IUserSearcher userSearcher;

    public UserRestController(IUserSearcher userSearcher) {
        this.userSearcher = userSearcher;
    }

    @GetMapping("/{id}")
    public UserSearcherResponse getUserById(@PathVariable String id) {
        return userSearcher.search(new UserSearchQuery(id));
    }
}