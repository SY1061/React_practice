package com.example.cart.mapper;

import com.example.cart.dto.Cart;
import org.apache.ibatis.annotations.*;

@Mapper
public interface CartMapper {
    @Select("select totalQuantity from Cart")
    Long findTotalQuantity();

    @Select("select max(cart_id) from Cart")
    Long findMaxCartId();

    @Insert("insert into cart(totalQuantity) values (#{totalQuantity})")
    @Options(useGeneratedKeys = true, keyProperty = "cartId")
    void insertCart(Cart cart);

    @Update("update Cart set totalQuantity=#{totalQuantity} where cart_id = #{cartId}")
    void updateCart(Cart cart);
}
