// package com.recharge.mobilerecharge.mapper;

// import com.recharge.mobilerecharge.dto.Userdto;
// import com.recharge.mobilerecharge.model.User;

// public class UserMapper {

//     public static Userdto mapToUserDto(User user) {
//         return new Userdto(
//                 user.getUserId(),
//                 user.getEmail(),
//                 user.getPassword(),
//                 user.getUsername(),
//                 user.getMobileNumber(),
//                 user.getUserRole());
//     }

//     public static User mapToUser(Userdto userDto) {
//         return new User(
//                 userDto.getUserId(),
//                 userDto.getEmail(),
//                 userDto.getPassword(),
//                 userDto.getUsername(),
//                 userDto.getMobileNumber(),
//                 userDto.getUserRole());
// }

// }