package com.stellar.examserver.controller;

import com.stellar.examserver.config.JwtUtils;
import com.stellar.examserver.service.impl.UserDetailsServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticateController {
   @Autowired
   private AuthenticationManager authenticationManager ;

   @Autowired
   private UserDetailsServiceimpl userDetailsService;

   @Autowired
   private JwtUtils jwtUtils;

   private void authenticate(String username , String password)

      try
      {

      }catch(DisabledException e)
      {
         throw new Exception(("USER DISABLED");
      }

}



}

