package com.stellar.examserver.service;

import com.stellar.examserver.model.User;
import com.stellar.examserver.model.UserRole;

import java.util.Set;

public interface UserService {

    //Creating user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    //get user by username
    public User getUser(String userName);


    // delete user by id
    public void deleteUser(Long userId);
}
