package com.sdu.diploma.controller;

import com.sdu.diploma.dto.LoginRequest;
import com.sdu.diploma.repository.UserRepository;
import com.sdu.diploma.service.UserDetailsImpl;
import com.sdu.diploma.service.UserDetailsServiceImpl;
import com.sdu.diploma.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import static org.springframework.security.core.context.SecurityContextHolder.getContext;

@CrossOrigin(origins = "*", maxAge = 3600)
@Slf4j
@Controller
public class AuthController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/loginPost")
    public ResponseEntity<?> authUser(LoginRequest loginRequest) throws Exception {

        UserDetailsImpl userDetails = (UserDetailsImpl) userDetailsService.loadUserByUsername(loginRequest.getUsername());

        if (userDetails != null && passwordEncoder.matches(loginRequest.getPassword(), userDetails.getPassword())) {

            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()));

            getContext().setAuthentication(authentication);

            return ResponseEntity.ok("ok");
        } else {
            return new ResponseEntity<>("Неправильный логин или пароль.", HttpStatus.BAD_REQUEST);
        }
    }

}
