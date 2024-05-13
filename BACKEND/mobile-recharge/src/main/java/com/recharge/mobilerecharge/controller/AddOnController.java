package com.recharge.mobilerecharge.controller;

import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.service.AddOnService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addons")
public class AddOnController {

    @Autowired
    private AddOnService addOnService;

    @Tag(name="Get Add-ons", description="endpoint for fetching all available add-ons")
    @GetMapping("/api/customer/addon")
    public List<AddOn> getAllAddOns() {
        return addOnService.getAllAddOns();
    }

    // @Tag(name="Post Add-ons", description="endpoint for adding particular add-on to recharge")
    // @PostMapping("/api/customer/recharge/addon")
    // public ResponseEntity<AddOn> saveAddOn(@RequestBody AddOn addOn)
	// {
    //     AddOn savedAddOn = addOnService.saveAddOn(addOn);
    //     return ResponseEntity.ok().body(savedAddOn);
	// }
    
    @Tag(name="Post Add-ons", description="endpoint for posting new add-ons from admin-side")
    @PostMapping("/api/admin/addon")
    public ResponseEntity<AddOn> saveAddOns(@RequestBody AddOn addOn)
	{
        AddOn savedAddOn = addOnService.saveAddOn(addOn);
        return ResponseEntity.ok().body(savedAddOn);
	}

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAddOn(@PathVariable Long id) {
        addOnService.deleteAddOn(id);
        return ResponseEntity.ok("Add-on deleted");
    }
    

}

//--------------------------------------------------------------end-----------------------------------------------
// package com.recharge.mobilerecharge.controller;

// import com.recharge.mobilerecharge.model.AddOn;
// import com.recharge.mobilerecharge.service.AddOnService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/addons")
// public class AddOnController {

//     @Autowired
//     private AddOnService addOnService;

//     @GetMapping("/api/customer/addon")
//     public List<AddOn> getAllAddOns() {
//         return addOnService.getAllAddOns();
//     }

//     // @GetMapping("/{id}")
//     // public ResponseEntity<AddOn> getAddOnById(@PathVariable Long id) {
//     //     AddOn addOn = addOnService.getAddOnById(id);
//     //     return ResponseEntity.ok().body(addOn);
//     // }

//     @PostMapping("/api/addon")
//     public ResponseEntity<AddOn> saveAddOn(@RequestBody AddOn addOn) {
//         AddOn savedAddOn = addOnService.saveAddOn(addOn);
//         return ResponseEntity.ok().body(savedAddOn);
//     }

    
//     // @PostMapping("/api/addon")
//     // public ResponseEntity<AddOn> saveAddOn(@RequestBody AddOn addOn) {
//     //     AddOn savedAddOn = addOnService.saveAddOn(addOn);
//     //     return ResponseEntity.ok().body(savedAddOn);
//     // }

//     // @DeleteMapping("/{id}")
//     // public ResponseEntity<Void> deleteAddOn(@PathVariable Long id) {
//     //     addOnService.deleteAddOn(id);
//     //     return ResponseEntity.noContent().build();
//     // }
// }
