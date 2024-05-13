package com.recharge.mobilerecharge.service.impl;

import com.recharge.mobilerecharge.dto.Rechargedto;
import com.recharge.mobilerecharge.mapper.RechargeMapper;
import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Customer;
import com.recharge.mobilerecharge.model.Plan;
import com.recharge.mobilerecharge.model.Recharge;
import com.recharge.mobilerecharge.repository.RechargeRepo;
import com.recharge.mobilerecharge.repository.AddOnRepo;
import com.recharge.mobilerecharge.repository.CustomerRepo;
import com.recharge.mobilerecharge.repository.PlanRepo;
import com.recharge.mobilerecharge.service.RechargeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class RechargeServiceImpl implements RechargeService {
    @Autowired
    private RechargeRepo rechargeRepository;
    @Autowired
    private PlanRepo planRepository;
    @Autowired
    private CustomerRepo customerRepository;
    
    @Autowired
    private AddOnRepo addOnRepository;
    // @Override
    // public Recharge saveRecharge(Recharge recharge) {
    //     return rechargeRepository.save(recharge);
    // }

    @Override
    public void deleteRecharge(Long planId) {
        rechargeRepository.deleteById(planId);
    }
    public Recharge updateDetails(Long rechargeId,Recharge e1)
	{
		Optional<Recharge> existingRechargeOptional = rechargeRepository.findById(rechargeId);

        if (existingRechargeOptional.isPresent()) {
            Recharge existingRecharge = existingRechargeOptional.get();
            // Update properties with new values
            existingRecharge.setRechargePrice(e1.getRechargePrice());
            existingRecharge.setStatus(e1.getStatus());
            existingRecharge.setDate(e1.getDate());
            // Save the updated plan
            return rechargeRepository.save(existingRecharge);
        } else {
            // Plan with given ID not found
            return null;
        }
	}


    @Override
    public void addPlan(Plan planRequest,String cno,Integer customerId) {
        // Optional<Plan> plan = planRepository.findById(planRequest.getPlanId());
        Optional<Plan> plan = planRepository.findById(planRequest.getPlanId());
        Customer customer = customerRepository.findByCustomerId(customerId);

            Recharge recharge = new Recharge();
            recharge.setRechargePrice(planRequest.getPlanPrice());
            recharge.setStatus("Success"); // You can set any default status
            recharge.setDate(Date.valueOf(LocalDate.now()));
            recharge.setMobileNumber(cno);
            recharge.setCustomer(customer);
            recharge.setPlan(planRequest);
    
            rechargeRepository.save(recharge);

    }

    @Override
    public void addAddOn(AddOn addOnRequest,String cno,Integer customerId) {
        Optional<AddOn> addOn = addOnRepository.findById(addOnRequest.getAddonId());
        Customer customer = customerRepository.findByCustomerId(customerId);

        Recharge recharge = new Recharge();
        recharge.setRechargePrice(addOnRequest.getAddonPrice());
        recharge.setStatus("Success"); // You can set any default status
        recharge.setDate(Date.valueOf(LocalDate.now()));
        recharge.setMobileNumber(cno);
        recharge.setCustomer(customer);
        recharge.setAddOn(addOnRequest);

        rechargeRepository.save(recharge);
    }
    // @Override
    // public List<Rechargedto> getCustomerRechargeHistory(Integer customerId) {
    //     List<Recharge> rechargeHistory = rechargeRepository.findByCustomerCustomerId(customerId);

    //     // Convert entities to DTOs using the mapper
    //     List<Rechargedto> rechargeDTOs = rechargeHistory.stream()
    //             .map(RechargeMapper::rechargeToRechargeDTO)
    //             .collect(Collectors.toList());

    //     return rechargeDTOs;
    // }
}

