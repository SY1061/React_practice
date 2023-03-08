package com.example.cart.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class CartDto {
    private Long cartId;
    private Long totalQuantity;

}
