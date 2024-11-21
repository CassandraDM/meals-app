import { useEffect, useState } from "react";

export default function useGetRandomMeal() {
  const [meal, setMeal] = useState<{
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strCategory: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
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
