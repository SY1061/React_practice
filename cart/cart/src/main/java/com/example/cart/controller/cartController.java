package com.example.cart.controller;

import com.example.cart.dto.CartAndItemDto;
import com.example.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cart")
@Slf4j
public class cartController {
    private final CartService cartService;

    // 여기부턴 내일.
    @PutMapping
    public void modifyCart(@RequestBody CartAndItemDto cartAndItemDto) {
        cartService.updateService(cartAndItemDto);
    }
}
