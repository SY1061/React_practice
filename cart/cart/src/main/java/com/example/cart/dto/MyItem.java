package com.example.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MyItem {
    private String id;
    private Long price;
    private Long quantity;
    private Long totalPrice;
    private String name;
}
