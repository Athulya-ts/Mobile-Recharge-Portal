// package com.recharge.mobilerecharge.config;


// import org.springframework.boot.CommandLineRunner;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Component;

// import com.recharge.mobilerecharge.model.User;
// import com.recharge.mobilerecharge.repository.UserRepo;

// import lombok.RequiredArgsConstructor;

// @Component
// @RequiredArgsConstructor
// @SuppressWarnings("null")
// public class UserCLI implements CommandLineRunner {

//     private final UserRepo usersRepository;
//     private final PasswordEncoder passwordEncoder;

//     @Override
//     public void run(String... args) throws Exception {
//         if (usersRepository.count() > 0)
//             return;
//         var user = User.builder()
//                 .name("Admin")
//                 .email("admin@gmail.com")
//                 .password(passwordEncoder.encode("Admin@123"))
//                 // .mobileNumber(mobileNumber:"8220661444")
//                 .role(com.recharge.mobilerecharge.enumerated.Role.ADMIN)
//                 .build();
//         usersRepository.save(user);
//     }

// }
package com.recharge.mobilerecharge.config;


import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.recharge.mobilerecharge.model.User;
import com.recharge.mobilerecharge.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner {

    private final UserRepo usersRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (usersRepository.count() > 0)
            return;
        var user = User.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("Admin@123"))
                // .mobileNumber(mobileNumber:"8220661444")
                .role(com.recharge.mobilerecharge.enumerated.Role.ADMIN)
                .build();
        usersRepository.save(user);
    }

}