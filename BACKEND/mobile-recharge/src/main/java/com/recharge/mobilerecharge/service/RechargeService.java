package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.dto.Rechargedto;
import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Plan;
import com.recharge.mobilerecharge.model.Recharge;

import java.util.List;
import java.util.Optional;
public interface RechargeService {

    void deleteRecharge(Long id);
    void addPlan(Plan planRequest,String cno,Integer customerId);
    void addAddOn(AddOn addOnRequest,String cno,Integer customerId);
    // List<Rechargedto> getCustomerRechargeHistory(Integer customerId);
}
