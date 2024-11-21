import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function useGetMeal() {
  // Using the useState hook to store the meals data
  const [meal, setMeal] = useState<{
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strCategory: string;
  } | null>(null);
  const { id } = useLocalSearchParams(); // Get the id from the params

  // useEffect hook is use to perform a side effect of fetching the data from the API with an async function
  // async function is used so the code can still be read while waiting for the data to be fetched
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
        );
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    })();
  }, []);

  return meal;
}
