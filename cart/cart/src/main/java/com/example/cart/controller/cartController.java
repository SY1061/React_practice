package com.example.cart.controller;

import com.example.cart.dto.CartAndItemDto;
import com.example.cart.service.CartService;
import com.fasterxml.jackson.core.JsonParser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cart")
@Slf4j
public class cartController {
    private final CartService cartService;

    // 여기부턴 내일.
    @PostMapping
    public void createCart(@RequestBody CartAndItemDto cartAndItemDto) {
        log.info(String.valueOf(cartAndItemDto.getItems().get(0).getTotalPrice()));
        log.info(String.valueOf(cartAndItemDto.getItems().get(1).getTotalPrice()));
        log.info(String.valueOf(cartAndItemDto.getTotalQuantity()));
//        cartService.createService(cartAndItemDto);
    }
}
