package com.example.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClientItem {
    private String id;
    private Long price;
    private Long quantity;
    private Long totalPrice;
    private String name;
}
