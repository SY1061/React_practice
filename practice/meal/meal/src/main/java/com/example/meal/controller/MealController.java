package com.example.meal.controller;

import com.example.meal.entity.Meal;
import com.example.meal.service.MealServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/meal")
public class MealController {
    private final MealServiceImpl mealServiceImpl;

    @GetMapping
    public List<Meal> getAllMeal() {
        return mealServiceImpl.getAllMealService();
    }

    @GetMapping("/{id}")
    public Meal getMeal(@PathVariable String id) {
        return mealServiceImpl.getMealService(id);
    }

    @PostMapping
    public int createMeal(@RequestBody Meal meal) {
        return mealServiceImpl.createMealService(meal);
    }

    @PutMapping
    public int updateMeal(@RequestBody Meal meal) {
        return mealServiceImpl.updateMealService(meal);
    }

    @DeleteMapping("/{id}")
    public int deleteMeal(@PathVariable String id) {
        return mealServiceImpl.deleteMealService(id);
    }
}
