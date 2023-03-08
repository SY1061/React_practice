package com.example.cart.service;

import com.example.cart.dto.CartAndItemDto;
import com.example.cart.dto.CartDto;
import com.example.cart.dto.ClientItem;
import com.example.cart.dto.ServerItem;
import com.example.cart.mapper.CartMapper;
import com.example.cart.mapper.ItemsMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{
    private final CartMapper cartMapper;
    private final ItemsMapper itemsMapper;
    // service 할 때마다 새로 생성하니까 cartId가 계속 생성되는 문제 발생해서 전역 변수로 둬야 할듯?
    CartDto cart = new CartDto();

    @Override
    public void updateService(CartAndItemDto cartAndItemDto) {
        // dto -> db .
        Long totalQuantity = cartAndItemDto.getTotalQuantity();
        cart.setTotalQuantity(totalQuantity);
        if(cart.getCartId() == null) {
            insertCartAndItems(cartAndItemDto);
        } else{
            updateCartAndItems(cartAndItemDto);
        }
    }

    private void insertCartAndItems(CartAndItemDto cartAndItemDto) {
        cartMapper.insertCart(cart);
        // auto_increment 때문에 insert 하자마자 cartId 값을 얻기 위해서 select 문 가져오기.
        // auto_increment 관리 하는 법을 몰라서 맨 처음 시작 했을 때를 기준으로 잡고 상수 1을 넣어줌.
        // 처음은 장바구니가 없으니까 무조건 insert.
        Long cartId = cartMapper.findMaxCartId();

        for (ClientItem cItem : cartAndItemDto.getItems()) {
            itemsMapper.insertItems(cItem, cartId);
        }
    }

    private void updateCartAndItems(CartAndItemDto cartAndItemDto) {
        cartMapper.updateCart(cart);
        //장바구니에 몇개의 item이 있을지 모르기에 조건에 따라 insert, update 실행.
        for (ClientItem cItem : cartAndItemDto.getItems()) {
            ServerItem sItem = itemsMapper.findItemById(cItem.getId());
            // db에서 select 했을 시 값이 있다면 update 실행. 없다면 insert 실행.
            if (sItem == null) {
                itemsMapper.insertItems(cItem, cart.getCartId());
            } else {
                itemsMapper.updateItems(cItem);
            }
        }
    }

}
