package com.recharge.mobilerecharge.controller;


import static com.recharge.mobilerecharge.utils.MyConstant.AUTH;
import static com.recharge.mobilerecharge.utils.MyConstant.LOGIN;
import static com.recharge.mobilerecharge.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recharge.mobilerecharge.dto.request.LoginRequest;
import com.recharge.mobilerecharge.dto.request.RegisterRequest;
import com.recharge.mobilerecharge.dto.response.LoginResponse;
import com.recharge.mobilerecharge.dto.response.RegisterResponse;
import com.recharge.mobilerecharge.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(AUTH)
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}
// package com.recharge.mobilerecharge.controller;


// import static com.recharge.mobilerecharge.utils.MyConstant.AUTH;
// import static com.recharge.mobilerecharge.utils.MyConstant.LOGIN;
// import static com.recharge.mobilerecharge.utils.MyConstant.REGISTER;
// import static org.springframework.http.HttpStatus.ACCEPTED;
// import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.recharge.mobilerecharge.dto.request.LoginRequest;
// import com.recharge.mobilerecharge.dto.request.RegisterRequest;
// import com.recharge.mobilerecharge.dto.response.LoginResponse;
// import com.recharge.mobilerecharge.dto.response.RegisterResponse;
// import com.recharge.mobilerecharge.service.AuthenticationService;

// import lombok.RequiredArgsConstructor;

// @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
// @RestController
// @RequiredArgsConstructor
// @RequestMapping(AUTH)
// public class AuthenticationController {

//     private final AuthenticationService authService;

//     @PostMapping(REGISTER)
//     public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
//         RegisterResponse response = new RegisterResponse();
//         try {
//             response = authService.register(request);
//             return new ResponseEntity<>(response, ACCEPTED);
//         } catch (Exception e) {
//             response.setMessage("Registration failed due to an unexpected error.");
//             return new ResponseEntity<>(response, EXPECTATION_FAILED);
//         }
//     }

//     @PostMapping(LOGIN)
//     public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
//         LoginResponse response = new LoginResponse();
//         try {
//             response = authService.login(request);
//             return new ResponseEntity<>(response, ACCEPTED);
//         } catch (Exception e) {
//             response.setMessage("Login failed!");
//             response.setToken("");
//             return new ResponseEntity<>(response, EXPECTATION_FAILED);
//         }
//     }
// }