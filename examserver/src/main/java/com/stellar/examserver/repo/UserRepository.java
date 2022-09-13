package com.stellar.examserver.repo;

import com.stellar.examserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    public  User findByUserName(String userName);

}

