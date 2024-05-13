package com.recharge.mobilerecharge.dto;

import java.util.List;

import com.recharge.mobilerecharge.model.Recharge;

// import com.recharge.mobilerecharge.model.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customerdto 
{
    private Integer customerId;
    private String customerName;
    private String customerAddress;
    private List<Recharge> recharges;
    // private User user;
}