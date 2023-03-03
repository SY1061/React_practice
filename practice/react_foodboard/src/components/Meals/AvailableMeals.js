import styles from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";

const AvailableMeals = () => {
    const localHost = `http://localhost:8080`;
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    /*
        useEffect로 처음에만 변동되게 만들었기 때문에 update할 때마다 새롭게 변경시켜 줄 useState 변수도 하나 필요.
     */
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(`${localHost}/meal`);

            if (!response.ok) {
                throw new Error("error 404");
            }

            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: responseData[key].mealId,
                    name: responseData[key].mealName,
                    description: responseData[key].description,
                    price: responseData[key].mealPrice,
                    image: `${localHost}${responseData[key].imagePath}`
                });
            }
            console.log(loadedMeals);
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [localHost]);

    if (isLoading) {
        return (
            <section className={styles.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={styles.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const mealsList = meals.map(
        meal => <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            image={meal.image}
        />
    );

    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;