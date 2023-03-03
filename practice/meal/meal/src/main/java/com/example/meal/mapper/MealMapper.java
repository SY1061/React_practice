package com.example.meal.mapper;

import com.example.meal.entity.Meal;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface MealMapper {
    @Select("SELECT * FROM Meals")
    List<Meal> getAllMeals();

    @Select("SELECT * FROM Meals where meal_id = #{mealId}")
    Meal getMealById(String id);

    @Insert("INSERT INTO Meals(meal_id, meal_name, description, meal_price, image_path)" +
            " values (#{mealId}, #{mealName}, #{description}, #{mealPrice}, #{imagePath})")
    int insertMeal(Meal meal);

    @Update("update Meals set " +
            "meal_name = #{mealName}, description=#{description}, meal_price = #{mealPrice}, image_path = #{imagePath}" +
            " where meal_id = #{mealId}")
    int updateMeal(Meal meal);

    @Delete("delete from Meals where meal_id = #{mealId}")
    int deleteMealById(String id);


}
