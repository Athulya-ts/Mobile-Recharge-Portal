package com.recharge.mobilerecharge.dto;

import com.recharge.mobilerecharge.model.Recharge;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Addondto
{
    
    private Long addonId;
    private String addonName;
    private double addonPrice;
    private String addonDetails;
    private String addonValidity;
    // private List<Recharge> recharges ;

}