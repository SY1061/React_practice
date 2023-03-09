package com.example.cart.service;

import com.example.cart.dto.CartAndItemDto;

public interface CartService {
    CartAndItemDto getService();
    void updateService(CartAndItemDto cartAndItemDto);
}
