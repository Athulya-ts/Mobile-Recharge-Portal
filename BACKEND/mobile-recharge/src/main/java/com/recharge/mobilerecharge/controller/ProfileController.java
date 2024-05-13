// package com.recharge.mobilerecharge.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;

// import com.recharge.mobilerecharge.dto.ProfileDetailsDTO;
// import com.recharge.mobilerecharge.model.Customer;
// import com.recharge.mobilerecharge.model.Recharge;
// import com.recharge.mobilerecharge.service.ProfileService;

// @RestController
// @RequestMapping("/profile")
// public class ProfileController {
//     @Autowired
//     private ProfileService profileService;

//     @GetMapping("/details")
//     public ResponseEntity<ProfileDetailsDTO> getProfileDetails(@RequestParam String email) {
//         Customer customer = profileService.getCustomerDetails(email);
//         List<Recharge> rechargeDetails = profileService.getRechargeDetails(customer.getCustomerId());

//         // Create a DTO or use a Map to organize the response data
//         ProfileDetailsDTO response = new ProfileDetailsDTO(customer, rechargeDetails);

//         return ResponseEntity.ok(response);
//     }
// }
