import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function ResultsScreen() {
  // Using the useState hook to store the meals data
  const [meals, setMeals] = useState<
    { idMeal: string; strMeal: string; strMealThumb: string }[]
  >([]);
  const { query } = useLocalSearchParams(); // Get the search term from the params

  console.log("recherche :", query);
  // useEffect hook is use to perform a side effect of fetching the data from the API with an async function
  // async function is used so the code can still be read while waiting for the data to be fetched
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    })();
  }, [query]);

  function goToMealDetailsScreen(idMeal: string): void {
    router.push(`/meals-list/${idMeal}`);
  }

  return (
    <View style={styles.container}>
      {/* Calling the Header component */}
      <Header />
      <View style={styles.content}>
        <Text style={styles.h1}>Search Results for "{query}"</Text>
        {meals.length === 0 ? (
          <Text style={styles.text}>No results found.</Text>
        ) : (
          <FlatList
            data={meals}
            keyExtractor={(meal) => meal.idMeal}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.mealItem}
                onPress={() => router.push(`/meals-list/${item.idMeal}`)}
              >
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={styles.mealImage}
                />
                <Text style={styles.mealTitle}>{item.strMeal}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      {/* Display the Footer component */}
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
  content: {
    flex: 1,
    padding: 20,
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#dddddd",
    textAlign: "center",
  },
  mealItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    padding: 10,
  },
});
