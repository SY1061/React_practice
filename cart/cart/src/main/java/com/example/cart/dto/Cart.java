package com.example.cart.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class Cart {
    private Long cartId;
    private Long totalQuantity;

}
