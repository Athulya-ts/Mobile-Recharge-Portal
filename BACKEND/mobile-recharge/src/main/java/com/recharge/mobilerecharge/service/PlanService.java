package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.model.Plan;

import java.util.List;

public interface PlanService {
    
    List<Plan> getPlanByType(String planType);
    void deletePlan(Long id);
    Plan updateDetails(Long planId, Plan updatedPlan);
    Plan savePlan(Plan plan);
}

//----------------------------------END----------------------------------
// package com.recharge.mobilerecharge.service;

// import com.recharge.mobilerecharge.model.Plan;

// import java.util.List;

// public interface PlanService {
//     List<Plan> getAllPlans();

//     Plan getPlanById(Long id);

//     Plan savePlan(Plan plan);

//     void deletePlan(Long id);
// }
