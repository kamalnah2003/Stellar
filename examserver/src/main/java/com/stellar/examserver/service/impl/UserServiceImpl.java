package com.stellar.examserver.service.impl;

import com.stellar.examserver.model.User;
import com.stellar.examserver.model.UserRole;
import com.stellar.examserver.repo.RoleRepository;
import com.stellar.examserver.repo.UserRepository;
import com.stellar.examserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    //create user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {

        User local = this.userRepository.findByUserName(user.getUserName());
        if(local!=null)
        {
            System.out.println("User exist already");
            throw new Exception("User already present !!");


        }else {
            //user create now
            for (UserRole ur:userRoles){
                roleRepository.save(ur.getRole());

            }

            user.getUserRoles().addAll((userRoles));
            local = this.userRepository.save(user);
        }
        return local;
    }
//GETTING USER BY USERNAME
    @Override
    public User getUser(String userName) {
        return this.userRepository.findByUserName(userName);
    }


    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
    }

