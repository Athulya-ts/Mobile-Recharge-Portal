package com.recharge.mobilerecharge.repository;

import com.recharge.mobilerecharge.model.Customer;
import com.recharge.mobilerecharge.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PlanRepo extends JpaRepository<Plan, Long> {
    List<Plan> findByPlanType(String planType);
    // Plan findByPlanId(Long planId);
}
