package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.Plandto;
import com.recharge.mobilerecharge.model.Plan;

public class PlansMapper {

    public static Plandto mapToPlanDto(Plan plan) {
        return new Plandto(
                plan.getPlanId(),
                plan.getPlanType(),
                plan.getPlanName(),
                plan.getPlanValidity(),
                plan.getPlanDetails(),
                plan.getPlanPrice());
                // plan.getRecharges());
    }

    public static Plan mapToPlan(Plandto planDto) {
        return new Plan(
                planDto.getPlanId(),
                planDto.getPlanType(),
                planDto.getPlanName(),
                planDto.getPlanValidity(),
                planDto.getPlanDetails(),
                planDto.getPlanPrice());
                // planDto.getRecharges());
}

}