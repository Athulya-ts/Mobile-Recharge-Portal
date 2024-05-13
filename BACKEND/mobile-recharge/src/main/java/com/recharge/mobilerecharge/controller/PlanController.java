package com.recharge.mobilerecharge.controller;

import com.recharge.mobilerecharge.model.Plan;
import com.recharge.mobilerecharge.service.PlanService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
public class PlanController {

    @Autowired
    private PlanService planService;

    @Tag(name="Get Plans", description="endpoint for getting all plans")
    @GetMapping("/api/customer/{planType}")
    public ResponseEntity<List<Plan>> getPlanByType(@PathVariable String planType) {
        List<Plan> plans = planService.getPlanByType(planType);
        return ResponseEntity.ok(plans);
    }
    
    @Tag(name="Delete Plan", description="endpoint for deleting a particular plan from admin side")
    @DeleteMapping("/{planId}")
    public ResponseEntity<String> deletePlan(@PathVariable Long planId) {
        planService.deletePlan(planId);
        return ResponseEntity.ok("Plan deleted");
    }

    @Tag(name="Edit plans", description="endpoint for edting details of a particular plan from admin side")
    @PutMapping("/{planId}")
	public ResponseEntity<Plan> updateInfo(@PathVariable Long planId,@RequestBody Plan st1)
	{
        Plan updatedEmp = planService.updateDetails(planId,st1);
		return ResponseEntity.ok(updatedEmp);
	}

    @Tag(name="Post plans", description="endpoint for posting details of a particular plan from admin side")
    @PostMapping("/post")
    public ResponseEntity<Plan> savePlan(@RequestBody Plan plan) {
        Plan savedPlan = planService.savePlan(plan);
        return ResponseEntity.ok().body(savedPlan);
    }

}

//------------------------------------------------------------END-------------------------------------------------------------//

// package com.recharge.mobilerecharge.controller;

// import com.recharge.mobilerecharge.model.Plan;
// import com.recharge.mobilerecharge.service.PlanService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/plans")
// public class PlanController {

//     @Autowired
//     private PlanService planService;

//     @GetMapping
//     public List<Plan> getAllPlans() {
//         return planService.getAllPlans();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Plan> getPlanById(@PathVariable Long id) {
//         Plan plan = planService.getPlanById(id);
//         return ResponseEntity.ok().body(plan);
//     }

    // @PostMapping
    // public ResponseEntity<Plan> savePlan(@RequestBody Plan plan) {
    //     Plan savedPlan = planService.savePlan(plan);
    //     return ResponseEntity.ok().body(savedPlan);
    // }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deletePlan(@PathVariable Long id) {
//         planService.deletePlan(id);
//         return ResponseEntity.noContent().build();
//     }
// }
