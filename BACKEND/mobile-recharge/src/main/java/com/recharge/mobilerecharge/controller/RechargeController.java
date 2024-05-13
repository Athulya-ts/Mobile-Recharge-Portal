package com.recharge.mobilerecharge.controller;
import java.util.Collections;
import com.recharge.mobilerecharge.dto.Rechargedto;
import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Plan;
// import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Recharge;
// import com.recharge.mobilerecharge.service.AddOnService;
import com.recharge.mobilerecharge.service.RechargeService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

// import java.util.List;

@RestController
@RequestMapping("/api/recharges")
public class RechargeController {

    @Autowired
    private RechargeService rechargeService;

    @Tag(name="Delete a particular recharge plan", description="endpoint for deleting details of a particular recharge from admin side")
    @DeleteMapping("/api/customer/recharge/{planId}")
    public ResponseEntity<String> deleteRecharge(@PathVariable Long planId) {
        rechargeService.deleteRecharge(planId);
        return ResponseEntity.ok("Recharge plan deleted");
    }

    //plan and add-on-rechargetable
    @PostMapping("/addPlan/{cno}/{cid}")
    public ResponseEntity<String> addPlan(@RequestBody Plan planRequest,@PathVariable("cno") String cno,@PathVariable("cid") Integer cid) {
        rechargeService.addPlan(planRequest,cno,cid);
        return ResponseEntity.ok("Plan added to recharge successfully!");
    }

    @PostMapping("/addOn/{cno}/{cid}")
    public ResponseEntity<String> addAddOn(@RequestBody AddOn addOnRequest,@PathVariable("cno") String cno,@PathVariable("cid") Integer cid) {
        rechargeService.addAddOn(addOnRequest,cno,cid);
        return ResponseEntity.ok("Add-on added to recharge successfully!");
    }
    // @GetMapping("/customer/{customerId}/history")
    // public ResponseEntity<List<Rechargedto>> getCustomerRechargeHistory(@PathVariable Integer customerId) {
    //     List<Rechargedto> rechargeHistory = rechargeService.getCustomerRechargeHistory(customerId);
    //     return ResponseEntity.ok(rechargeHistory);
    // }

}


