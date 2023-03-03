package com.example.meal.service;

import com.example.meal.entity.Meal;

import java.util.List;

public interface MealService {
    List<Meal> getAllMealService();

    Meal getMealService(String id);

    int createMealService(Meal meal);

    int updateMealService(Meal meal);

    int deleteMealService(String id);

}
