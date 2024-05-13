package com.recharge.mobilerecharge.dto;

// import com.recharge.mobilerecharge.model.Recharge;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
// import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Plandto {

    private Long planId;
    private String planType;
    private String planName;
    private String planValidity;
    private String planDetails;
    private double planPrice;
    // private List<Recharge> recharges ;

}