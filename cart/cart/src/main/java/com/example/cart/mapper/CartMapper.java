package com.example.cart.mapper;

import com.example.cart.dto.CartDto;
import org.apache.ibatis.annotations.*;

@Mapper
public interface CartMapper {
    @Select("select * from Cart where cart_id = #{id}")
    CartDto findCartById(Long id);

    @Select("select max(cart_id) from Cart")
    Long findMaxCartId();

    @Insert("insert into cart(totalQuantity) values (#{totalQuantity})")
    @Options(useGeneratedKeys = true, keyProperty = "cartId")
    void insertCart(CartDto cart);

    @Update("update Cart set totalQuantity=#{totalQuantity} where cart_id = #{cartId}")
    void updateCart(CartDto cart);
}
