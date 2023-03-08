package com.example.cart.dto;

import java.util.List;

public class CartAndItemDto {
    private List<ClientItem> items;
    private Long totalQuantity;

    public Long getTotalQuantity() {
        return this.totalQuantity;
    }

    public List<ClientItem> getItems() {
        return this.items;
    }
}
