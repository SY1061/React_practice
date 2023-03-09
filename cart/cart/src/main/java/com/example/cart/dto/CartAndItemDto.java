package com.example.cart.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CartAndItemDto {
    private List<ClientItem> items;
    private Long totalQuantity;
}
