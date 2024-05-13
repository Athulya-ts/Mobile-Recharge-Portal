
package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.Rechargedto;
import com.recharge.mobilerecharge.model.Recharge;

public class RechargeMapper {

    public static Rechargedto rechargeToRechargeDTO(Recharge recharge) {
        return new Rechargedto(
                recharge.getRechargeId(),
                recharge.getRechargePrice(),
                recharge.getStatus(),
                recharge.getMobileNumber(),
                recharge.getDate(),
                recharge.getPlan(),
                recharge.getAddOn(),
                recharge.getCustomer());
    }

    public static Recharge rechargeDTOToRecharge(Rechargedto rechargeDTO) {
        return new Recharge(
                rechargeDTO.getRechargeId(),
                rechargeDTO.getRechargePrice(),
                rechargeDTO.getStatus(),
                rechargeDTO.getMobileNumber(),
                rechargeDTO.getDate(),
                rechargeDTO.getPlan(),
                rechargeDTO.getAddOn(),
                rechargeDTO.getCustomer());
    }

    public Rechargedto map(Recharge recharge, Class<Rechargedto> class1) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'map'");
    }

}
