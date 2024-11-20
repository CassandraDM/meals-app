import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Index() {
  // Using the useState hook to store the meals data
  const [meals, setMeals] = useState<
    { idMeal: string; strMeal: string; strMealThumb: string }[]
  >([]);
  // Calling the useRouter hook to navigate to different screens
  const router = useRouter();
  // Function to navigate to the screen of the list of the meals
  const goToMealsListScreen = () => {
    router.push(`/meals-list`);
  };
  // Function to navigate to the screen of the details of one meal
  const goToMealDetailsScreen = (idMeal: string) => {
    router.push(`/meals-list/${idMeal}`);
  };

  // Function to navigate to the screen of a random meal
  const goToRandomMeal = () => {
    router.push(`/meals-list/random`);
  };

  //  useEffect hook is use to perform a side effect of fetching the data from the API with an async function
  //  async function is used so the code can still be read while waiting for the data to be fetched
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* Calling the Header component */}
      <Header />
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>
          SparkFlavor is an app that provides healthy and delicious recipes. We
          offer a variety of meal plans to suit your needs, whether you're
          looking to lose weight, gain muscle, or just eat healthier. With
          SparkFlavor, eating healthy has never been easier!
        </Text>
      </View>
      <View style={styles.mealsContainer}>
        <Text style={styles.title}>Our Top 3:</Text>
        {meals.slice(0, 3).map((meal) => (
          <View key={meal.idMeal}>
            {/* The TouchableOpacity is like a button but it
            allow us to style it as we want */}
            <TouchableOpacity
              style={styles.mealItem}
              onPress={() => goToMealDetailsScreen(meal.idMeal)}
            >
              <Image
                source={{ uri: meal.strMealThumb }}
                style={styles.mealImage}
              />
              <Text style={styles.mealTitle}>{meal.strMeal}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => goToMealsListScreen()}
      >
        <Text style={styles.buttonText}>View All Our Meals!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToRandomMeal()}>
        <Text style={styles.buttonText}>View A Random Meal!</Text>
      </TouchableOpacity>
      {/* Calling the Footer component */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "pink",
  },
  descriptionContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    color: "#dddddd",
  },
  mealsContainer: {
    width: "100%",
  },
  mealItem: {
    flexDirection: "row",
    backgroundColor: "#333",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: "pink",
    borderWidth: 1,
  },
  mealTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  mealImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
