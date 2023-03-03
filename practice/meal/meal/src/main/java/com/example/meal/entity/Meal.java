package com.example.meal.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Meal {
    private String mealId;
    private String mealName;
    private String description;
    private BigDecimal mealPrice;
    private String imagePath;
}
