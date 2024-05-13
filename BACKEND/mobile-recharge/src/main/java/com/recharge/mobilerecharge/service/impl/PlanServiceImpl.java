package com.recharge.mobilerecharge.service.impl;

import com.recharge.mobilerecharge.model.Plan;
import com.recharge.mobilerecharge.repository.PlanRepo;
import com.recharge.mobilerecharge.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class PlanServiceImpl implements PlanService {
    @Autowired
    private PlanRepo planRepository;

    @Override
    public List<Plan> getPlanByType(String planType) {
        return planRepository.findByPlanType(planType);
    }
    
    @Override
    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }

    @Override
    public Plan savePlan(Plan e)
	{
		return planRepository.save(e);
	}

    @Override
    public Plan updateDetails(Long planId, Plan updatedPlan) {
        Optional<Plan> existingPlanOptional = planRepository.findById(planId);

        if (existingPlanOptional.isPresent()) {
            Plan existingPlan = existingPlanOptional.get();

            // Update properties with new values
            existingPlan.setPlanType(updatedPlan.getPlanType());
            existingPlan.setPlanName(updatedPlan.getPlanName());
            existingPlan.setPlanValidity(updatedPlan.getPlanValidity());
            existingPlan.setPlanDetails(updatedPlan.getPlanDetails());
            existingPlan.setPlanPrice(updatedPlan.getPlanPrice());

            // Save the updated plan
            return planRepository.save(existingPlan);
        } else {
            // Plan with given ID not found
            return null;
        }
    }
}

//----------------------------------------END-----------------------------------

// package com.recharge.mobilerecharge.service.impl;

// import com.recharge.mobilerecharge.model.Plan;
// import com.recharge.mobilerecharge.repository.PlanRepo;
// import com.recharge.mobilerecharge.service.PlanService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class PlanServiceImpl implements PlanService {
//     @Autowired
//     private PlanRepo planRepository;

//     @Override
//     public List<Plan> getAllPlans() {
//         return planRepository.findAll();
//     }

//     @Override
//     public Plan getPlanById(Long id) {
//         return planRepository.findById(id).orElse(null);
//     }

//     @Override
//     public Plan savePlan(Plan plan) {
//         return planRepository.save(plan);
//     }

//     @Override
//     public void deletePlan(Long id) {
//         planRepository.deleteById(id);
//     }
// }
