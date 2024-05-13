package com.recharge.mobilerecharge.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "AddOn")
public class AddOn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addonId;

    @Column(length = 50, nullable = false)
    private String addonName;

    @Column(nullable = false)
    private double addonPrice;

    @Column(length = 255)
    private String addonDetails;

    @Column(length = 50)
    private String addonValidity;

    // @OneToMany(mappedBy = "addOn")
    // private List<Recharge> recharges;
}
