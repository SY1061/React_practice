package com.example.meal;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.meal.mapper")
public class MealApplication {

	public static void main(String[] args) {
		SpringApplication.run(MealApplication.class, args);
	}

}
