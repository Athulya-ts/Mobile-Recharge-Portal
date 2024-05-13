// package com.recharge.mobilerecharge.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.recharge.mobilerecharge.model.Customer;
// import com.recharge.mobilerecharge.model.Recharge;
// import com.recharge.mobilerecharge.repository.CustomerRepo;
// import com.recharge.mobilerecharge.repository.RechargeRepo;

// import jakarta.persistence.EntityNotFoundException;

// @Service
// public class ProfileService {
//     @Autowired
//     private CustomerRepo customerRepository;

//     @Autowired
//     private RechargeRepo rechargeRepository;

//     public Customer getCustomerDetails(String email) {
//         return customerRepository.findByCustomerAddress(email);
//     }

//     public List<Recharge> getRechargeDetails(Integer customerId) {
//         return rechargeRepository.findByCustomerCustomerId(customerId);
//     }
// }
