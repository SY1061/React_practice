package com.example.meal.service;

import com.example.meal.entity.ImageEnum;
import com.example.meal.entity.Meal;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mybatis.spring.boot.test.autoconfigure.AutoConfigureMybatis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.in;
import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMybatis
@Transactional
class MealServiceImplTest {
    @Autowired
    private MealServiceImpl mealService;

    @Test
    @DisplayName("")
    public void testGetAllMeals() {
        Meal meal1 = new Meal();
        meal1.setMealId("m1");
        meal1.setMealName("Sushi");
        meal1.setDescription("Finese fish and veggies");
        meal1.setMealPrice(BigDecimal.valueOf(22.99));

        Meal meal2 = new Meal();
        meal2.setMealId("m2");
        meal2.setMealName("Schnitzel");
        meal2.setDescription("A german specialty!");
        meal2.setMealPrice(BigDecimal.valueOf(16.5));

        Meal meal3 = new Meal();
        meal3.setMealId("m3");
        meal3.setMealName("Barbecue Burger");
        meal3.setDescription("American, raw, meaty");
        meal3.setMealPrice(BigDecimal.valueOf(12.99));

        Meal meal4 = new Meal();
        meal4.setMealId("m4");
        meal4.setMealName("Green Bowl");
        meal4.setDescription("Healthy...and green...");
        meal4.setMealPrice(BigDecimal.valueOf(18.99));

        List<Meal> meals = new ArrayList<Meal>();
        meals.add(meal1);
        meals.add(meal2);
        meals.add(meal3);
        meals.add(meal4);

        assertEquals(meals.get(0).getMealPrice(), mealService.getMealService("m1").getMealPrice());
        assertEquals(meals.size(), mealService.getAllMealService().size());

    }

    @Test
    @DisplayName("서비스 로직에서 id에 맞는 값이 들어오는지 확인")
    public void testGetMeal() {
        Meal meal = new Meal();
        meal.setMealId("m3");
        meal.setMealName("Barbecue Burger");
        meal.setDescription("American, raw, meaty");
        meal.setMealPrice(BigDecimal.valueOf(12.99));

        Meal actualMeal = mealService.getMealService(meal.getMealId());
        assertEquals(meal.getMealName(), actualMeal.getMealName());
        assertEquals(meal.getMealPrice(), actualMeal.getMealPrice());
    }

    @Test
    @DisplayName("음식이 DB에 추가되는지 확인")
    public void testCreateMeal() {
        Meal meal = new Meal();
        meal.setMealId("m5");
        meal.setMealName("Bulgogi");
        meal.setDescription("Korean, traditional");
        meal.setMealPrice(BigDecimal.valueOf(20));
        String path = "src/file";
        meal.setImagePath(path + "sushi.jpg");

        mealService.createMealService(meal);

        int mealCount = mealService.getAllMealService().size();

        assertThat(mealCount).isEqualTo(5);

    }

    @Test
    @DisplayName("DB에서 값이 수정되는지 확인")
    public void testUpdateMealPrice() {
        Meal meal = new Meal();
        meal.setMealId("m1");
        meal.setMealName("Sushi");
        meal.setDescription("very very delicious");
        meal.setMealPrice(BigDecimal.valueOf(30));

        mealService.updateMealService(meal);

        String updateMealDescription = mealService.getMealService("m1").getDescription();
        BigDecimal updateMealPrice = mealService.getMealService("m1").getMealPrice();

        assertThat(updateMealDescription).isEqualTo("very very delicious");
        assertThat(updateMealPrice).isEqualByComparingTo(BigDecimal.valueOf(30));
    }

    @Test
    @DisplayName("DB에서 값이 사라지는지 확인")
    public void testDeleteMeal() {
        mealService.deleteMealService("m4");

        int mealCount = mealService.getAllMealService().size();

        assertThat(mealCount).isEqualTo(3);
    }

    @Test
    @DisplayName("추가한 이미지 경로가 제대로 나오는지 확인")
    public void testImagePath() {

        List<String> imagePathList = ImageEnum.getImagePathList();

        mealService.getMealService("m1").setImagePath(imagePathList.get(0));

        String imagePath = mealService.getMealService("m1").getImagePath();

        assertThat(imagePath).isEqualTo("/images/sushi.jpg");
    }

    @Test
    public void testImage() throws IOException {
        Resource resource = new ClassPathResource("sushi.jpg");
        assertNotNull(resource);

        InputStream inputStream = resource.getInputStream();
        byte[] bytes = FileCopyUtils.copyToByteArray(inputStream);
        assertNotNull(bytes);
    }
}