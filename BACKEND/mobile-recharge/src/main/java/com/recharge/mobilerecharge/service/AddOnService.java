package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.model.AddOn;

import java.util.List;

public interface AddOnService {
    List<AddOn> getAllAddOns();

    // AddOn getAddOnById(Long id);

    AddOn saveAddOn(AddOn addOn);
    AddOn saveAddOns(AddOn addOn);

    void deleteAddOn(Long id);
}

//----------------------------------------------END-------------------------------------
// package com.recharge.mobilerecharge.service;

// import com.recharge.mobilerecharge.model.AddOn;

// import java.util.List;

// public interface AddOnService {
//     List<AddOn> getAllAddOns();

//     AddOn getAddOnById(Long id);

//     AddOn saveAddOn(AddOn addOn);

//     void deleteAddOn(Long id);
// }
