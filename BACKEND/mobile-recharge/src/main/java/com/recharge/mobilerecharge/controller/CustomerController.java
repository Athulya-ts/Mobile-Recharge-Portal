package com.recharge.mobilerecharge.controller;

import com.recharge.mobilerecharge.model.Customer;
import com.recharge.mobilerecharge.service.CustomerService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Tag(name="Get Customers", description="endpoint for fetching details of all customers")
    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @Tag(name="Get Particular customer details", description="endpoint for getting details of a particular customer")
    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Integer id) {
        Customer customer = customerService.getCustomerById(id);
        return ResponseEntity.ok().body(customer);
    }

    @Tag(name="Post customer details", description="endpoint for posting details of a particular customer from admin side")
    @PostMapping
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) {
        Customer savedCustomer = customerService.saveCustomer(customer);
        return ResponseEntity.ok().body(savedCustomer);
    }

    @Tag(name="Delete customer details", description="endpoint for deleting details of a particular customer from admin side")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Integer id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.ok("Customer deleted");
    }
}
