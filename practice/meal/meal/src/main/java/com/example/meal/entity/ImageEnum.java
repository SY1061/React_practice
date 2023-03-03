package com.example.meal.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Getter
@Slf4j
@AllArgsConstructor
public enum ImageEnum {
    SUSHI("sushi.jpg", 0),
    SCHNITZEL("Schintzel.jpg", 1),
    BURGER("BarbecueBurger.jpg", 2),
    GREEN_BOWL("GreenBowl.jpg", 3);
    private final String imageName;
    private final int index;

    public static List<String> getImagePathList() {
        String path = "/images/";
        List<String> imagePathList = new ArrayList<>();
        for(ImageEnum image : ImageEnum.values()) {
            String imagePath = path + image.getImageName();
            imagePathList.add(imagePath);
        }
        return imagePathList;
    }
}
