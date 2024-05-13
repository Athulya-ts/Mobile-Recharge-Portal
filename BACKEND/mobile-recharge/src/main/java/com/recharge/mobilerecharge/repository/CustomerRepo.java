package com.recharge.mobilerecharge.repository;

import com.recharge.mobilerecharge.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
// import java.util.List;
// import java.util.Optional;


public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    Customer findByCustomerId(Integer customerId);
    Customer findByCustomerAddress(String customerAddress);
}
