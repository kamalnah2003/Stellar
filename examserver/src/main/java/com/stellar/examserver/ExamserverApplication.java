package com.stellar.examserver;

import com.stellar.examserver.model.Role;
import com.stellar.examserver.model.User;
import com.stellar.examserver.model.UserRole;
import com.stellar.examserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {
	@Autowired
	private UserService userService;


	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code");

		User user = new User();

		user.setFirstName("Adam");
		user.setLastName("eve");
		user.setUserName("adam00700000");
		user.setPassword("abc");
		user.setEmail("adam@gmail.com");
		user.setProfile("default.png");
		user.setPhone("808465164065");

		Role  role1 = new Role();
		role1.setRoleId(45L);
		role1.setRoleName("ADMIN");

		Set<UserRole> userRoleSet = new HashSet<>();
		UserRole userRole = new UserRole();

		userRole.setRole(role1);

		userRole.setUser(user);


		userRoleSet.add(userRole);

		User user1 = this.userService.createUser(user, userRoleSet);

		System.out.println(user1.getUserName());


	}
}
