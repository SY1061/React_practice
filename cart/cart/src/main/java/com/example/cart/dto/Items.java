package com.example.cart.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Items {
    private String itemId;
    private String itemName;
    private Long itemPrice;
    private Long itemQuantity;
    private Long itemTotalPrice;
}
