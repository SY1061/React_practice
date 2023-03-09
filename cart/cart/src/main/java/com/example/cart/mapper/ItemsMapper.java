package com.example.cart.mapper;

import com.example.cart.dto.ClientItem;
import com.example.cart.dto.ServerItem;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ItemsMapper {
    @Select("select item_id, item_price, item_quantity, item_totalPrice, item_name from Items")
    List<ClientItem> findAllItems();

    @Select("select * from Items where item_id=#{itemId}")
    ServerItem findItemById(String itemId);

    @Insert("insert into items(item_id, cart_id, item_name, item_price, item_quantity, item_totalPrice) " +
            "values (#{item.id}, #{cartId}, #{item.name}, #{item.price}, #{item.quantity}, #{item.totalPrice})")
    void insertItems(ClientItem item, Long cartId);

    @Update("update items set " +
            "item_name=#{name}, item_price=#{price}, item_quantity=#{quantity}, item_totalPrice=#{totalPrice}" +
            " where item_id=#{id}")
    void updateItems(ClientItem item);
}
