package com.recharge.mobilerecharge.service.impl;

import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.repository.AddOnRepo;
import com.recharge.mobilerecharge.service.AddOnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddOnServiceImpl implements AddOnService {
    @Autowired
    private AddOnRepo addOnRepository;

    @Override
    public List<AddOn> getAllAddOns() {
        return addOnRepository.findAll();
    }

    // @Override
    // public AddOn getAddOnById(Long id) {
    //     return addOnRepository.findById(id).orElse(null);
    // }

    @Override
    public AddOn saveAddOn(AddOn addOn) {
        return addOnRepository.save(addOn);
    }

    @Override
    public AddOn saveAddOns(AddOn addOn) {
        return addOnRepository.save(addOn);
    }

    @Override
    public void deleteAddOn(Long id) {
        addOnRepository.deleteById(id);
    }
}

//---------------------------------END----------------------------------------
// package com.recharge.mobilerecharge.service.impl;

// import com.recharge.mobilerecharge.model.AddOn;
// import com.recharge.mobilerecharge.repository.AddOnRepo;
// import com.recharge.mobilerecharge.service.AddOnService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class AddOnServiceImpl implements AddOnService {
//     @Autowired
//     private AddOnRepo addOnRepository;

//     @Override
//     public List<AddOn> getAllAddOns() {
//         return addOnRepository.findAll();
//     }

//     @Override
//     public AddOn getAddOnById(Long id) {
//         return addOnRepository.findById(id).orElse(null);
//     }

//     @Override
//     public AddOn saveAddOn(AddOn addOn) {
//         return addOnRepository.save(addOn);
//     }

//     @Override
//     public void deleteAddOn(Long id) {
//         addOnRepository.deleteById(id);
//     }
// }
