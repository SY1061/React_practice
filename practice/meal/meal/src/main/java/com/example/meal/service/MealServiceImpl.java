package com.example.meal.service;

import com.example.meal.entity.Meal;
import com.example.meal.mapper.MealMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MealServiceImpl implements MealService{
    private final MealMapper mealMapper;

    @Override
    public List<Meal> getAllMealService() {
        return mealMapper.getAllMeals();
    }

    @Override
    public Meal getMealService(String id) {
        return mealMapper.getMealById(id);
    }

    @Override
    public int createMealService(Meal meal) {
        return mealMapper.insertMeal(meal);
    }

    @Override
    public int updateMealService(Meal meal) {
        return mealMapper.updateMeal(meal);
    }

    @Override
    public int deleteMealService(String id) {
        return mealMapper.deleteMealById(id);
    }
}
