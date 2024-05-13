package com.recharge.mobilerecharge.dto;

import java.sql.Date;

import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Customer;
import com.recharge.mobilerecharge.model.Plan;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rechargedto {
    private Long rechargeId;
    private double rechargePrice;
    private String mobileNumber;
    private String status;
    private Date date; // Change to java.util.Date
    private Plan plan;
    private AddOn addOn;
    private Customer customer;

}
