// package com.recharge.mobilerecharge.dto;

// import java.util.List;
// import java.util.stream.Collectors;

// import com.recharge.mobilerecharge.model.Customer;
// import com.recharge.mobilerecharge.model.Recharge;
// import com.recharge.mobilerecharge.dto.Rechargedto;

// public class ProfileDetailsDTO {
//     private Integer customerId;
//     private String customerName;
//     private String customerEmail;
//     private List<Rechargedto> rechargeDetails;

//     // Constructors, getters, and setters

//     public ProfileDetailsDTO(Customer customer, List<Recharge> rechargeList) {
//         this.customerId = customer.getCustomerId();
//         this.customerName = customer.getCustomerName();
//         this.customerEmail = customer.getCustomerAddress();

//         this.rechargeDetails = rechargeList.stream()
//                 .map(Rechargedto::new)
//                 .collect(Collectors.toList());
//     }
// }
