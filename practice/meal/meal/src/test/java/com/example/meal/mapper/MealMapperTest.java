package com.example.meal.mapper;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.AutoConfigureMybatis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMybatis
class MealMapperTest {
    @Autowired
    private MealMapper mealMapper;

    @Test
    @DisplayName("Mapper 내부에 값이 들어오는지 확인")
    public void testMapper() {
        assertNotNull(mealMapper.getAllMeals());
    }

    @Test
    @DisplayName("모든 리스트가 들어오는지 테스트")
    public void testGetAllMeals() {
        assertEquals(4, mealMapper.getAllMeals().size());
    }
}