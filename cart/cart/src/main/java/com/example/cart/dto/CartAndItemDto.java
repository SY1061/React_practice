package com.example.cart.dto;

import org.springframework.boot.configurationprocessor.json.JSONArray;

import java.util.List;

public class CartAndItemDto {
    private List<MyItem> items;
    private Long totalQuantity;

    public Long getTotalQuantity() {
        return this.totalQuantity;
    }

    public List<MyItem> getItems() {
        return this.items;
    }
}
