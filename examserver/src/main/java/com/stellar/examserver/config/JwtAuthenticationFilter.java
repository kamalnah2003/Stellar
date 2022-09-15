package com.stellar.examserver.config;

import com.stellar.examserver.service.impl.UserDetailsServiceimpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private UserDetailsServiceimpl userDetailsServiceimpl;
    @Autowired
    private JwtUtils jwtUtil ;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String requestTokenHeader = request.getHeader("Authorization");
        System.out.println(requestTokenHeader);
        String username= null;
        String jwtToken=null;
        if(requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
// yes
            jwtToken = requestTokenHeader.substring(7);

            try{
          username =  this.jwtUtil.extractUsername(jwtToken);
        }catch (ExpiredJwtException e)
            {
                e.printStackTrace();
                System.out.println("Jwt Token has Expired");
            }catch (Exception e){
                e.printStackTrace();
                System.out.println("error");
            }


        }
            else {
            System.out.println("Invalid token , not start with bearer string");
    }
             //vaildated
        if (username !=null && SecurityContextHolder.getContext().getAuthentication()==null)
        {
        this.userDetailsServiceimpl
        }
    }
}
