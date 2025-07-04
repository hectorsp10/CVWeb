package com.cvhector.backend.repository.user.repositories;

import com.cvhector.backend.Domain.user.repository.IUserSearch;
import com.cvhector.backend.Domain.user.userEntity.User;
import com.cvhector.backend.Domain.user.userEntity.UserID;
import com.cvhector.backend.repository.user.entities.UserEntity;
import com.cvhector.backend.repository.user.mappers.UserMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepository implements IUserSearch {

    private final SpringDataUserRepository jpa;

    public UserRepository(SpringDataUserRepository jpa) {
        this.jpa = jpa;
    }

    @Override
    public Optional<User> findById(UserID id) {
        return jpa.findById(id.getValue())
                .map(UserMapper::toDomain);
    }

    @Override
    public void save(User user) {
        jpa.save(UserMapper.toEntity(user));
    }

    interface SpringDataUserRepository extends JpaRepository<UserEntity, String> {}
}
