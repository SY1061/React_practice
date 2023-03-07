package com.example.cart.service;

import com.example.cart.dto.CartAndItemDto;
import com.example.cart.mapper.CartMapper;
import com.example.cart.mapper.ItemsMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{
    private final CartMapper cartMapper;
    private final ItemsMapper itemsMapper;

    @Override
    public void createService(CartAndItemDto cartAndItemDto) {
//        System.out.println(cartAndItemDto.getTotalQuantity());
    }
}
