package com.recharge.mobilerecharge.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.recharge.mobilerecharge.model.User;


@Repository
public interface UserRepo extends JpaRepository<User,Long>{
    Optional<User> findByEmail(String email);
}

// package com.recharge.mobilerecharge.repository;
// import java.util.Optional;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import com.recharge.mobilerecharge.model.User;


// @Repository
// public interface UserRepo extends JpaRepository<User,Long>{
//     Optional<User> findByEmail(String email);
// }