package com.recharge.mobilerecharge.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Recharge")
public class Recharge
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rechargeId;

    @Column(name="recharge_price")
    private double rechargePrice;

    @Column(name="mobile_number")
    private String mobileNumber;

    @Column(name="status")
    private String status;

    @Column(name="date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "planId")
    private Plan plan;

    @ManyToOne
    @JoinColumn(name = "addonId")
    private AddOn addOn;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

}