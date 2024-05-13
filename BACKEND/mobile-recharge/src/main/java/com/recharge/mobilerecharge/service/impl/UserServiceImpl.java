// package com.recharge.mobilerecharge.service.impl;

// import com.recharge.mobilerecharge.model.User;
// import com.recharge.mobilerecharge.repository.UserRepo;
// import com.recharge.mobilerecharge.service.UserService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// // import java.util.List;

// @Service
// public class UserServiceImpl implements UserService {
//     @Autowired
//     private UserRepo userRepository;

//     @Override
//     public User saveUser(User user) {
//         return userRepository.save(user);
//     }
// }

// //------------------------------------------------------------end--------------------------------------------------------
// // package com.recharge.mobilerecharge.service.impl;

// // import com.recharge.mobilerecharge.model.User;
// // import com.recharge.mobilerecharge.repository.UserRepo;
// // import com.recharge.mobilerecharge.service.UserService;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.stereotype.Service;

// // import java.util.List;

// // @Service
// // public class UserServiceImpl implements UserService {
// //     @Autowired
// //     private UserRepo userRepository;

// //     @Override
// //     public List<User> getAllUsers() {
// //         return userRepository.findAll();
// //     }

// //     @Override
// //     public User getUserById(Long id) {
// //         return userRepository.findById(id).orElse(null);
// //     }

// //     @Override
// //     public User getUserByEmail(String email) {
// //         return userRepository.findByEmail(email);
// //     }

// //     @Override
// //     public User saveUser(User user) {
// //         return userRepository.save(user);
// //     }

// //     @Override
// //     public void deleteUser(Long id) {
// //         userRepository.deleteById(id);
// //     }
// // }
