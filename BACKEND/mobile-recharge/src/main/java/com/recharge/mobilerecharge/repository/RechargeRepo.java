package com.recharge.mobilerecharge.repository;

import com.recharge.mobilerecharge.model.Customer;
import com.recharge.mobilerecharge.model.Recharge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RechargeRepo extends JpaRepository<Recharge, Long> {
    // Optional<Recharge> findById(Long id);
    // List<Recharge> findByCustomerCustomerId(Integer customerId);
}
