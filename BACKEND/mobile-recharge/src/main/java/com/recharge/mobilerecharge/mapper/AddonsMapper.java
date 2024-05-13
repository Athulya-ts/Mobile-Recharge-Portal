package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.Addondto;
import com.recharge.mobilerecharge.model.AddOn;

public class AddonsMapper {

    public static Addondto mapToAddonDto(AddOn addon) {
        return new Addondto(
                addon.getAddonId(),
                addon.getAddonName(),
                addon.getAddonPrice(),
                addon.getAddonDetails(),
                addon.getAddonValidity()
                // addon.getRecharges()
                );
    }

    public static AddOn mapToAddon(Addondto addonDto) {
        return new AddOn(
                addonDto.getAddonId(),
                addonDto.getAddonName(),
                addonDto.getAddonPrice(),
                addonDto.getAddonDetails(),
                addonDto.getAddonValidity()
                // addonDto.getRecharges()
                );
    }

}