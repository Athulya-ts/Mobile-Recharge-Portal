package com.recharge.mobilerecharge.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Plan")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planId;

    @Column(length = 50, nullable = false)
    private String planType;

    @Column(length = 50, nullable = false)
    private String planName;

    @Column(length = 50, nullable = false)
    private String planValidity;

    @Column(length = 255)
    private String planDetails;

    @Column(nullable = false)
    private double planPrice;

    // @OneToMany(mappedBy = "plan")
    // private List<Recharge> recharges;
}
