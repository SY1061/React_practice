package com.example.cart.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ServerItem {
    private String itemId;
    private Long cartId;
    private String itemName;
    private Long itemPrice;
    private Long itemQuantity;
    private Long itemTotalPrice;
}
