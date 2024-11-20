import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function MealsList() {
  // Calling the useRouter hook to navigate to different screens
  const [search, setSearch] = useState("");

  const router = useRouter();
  // Function to navigate to the screen of the details of one meal
  const goToMealDetailsScreen = (idMeal: string) => {
    router.push(`/meals-list/${idMeal}`);
  };

  const goToResultsScreen = () => {
    router.push(`/meals-list/search/${search}`);
  };

  // Using the useState hook to store the meals data
  const [meals, setMeals] = useState<
    { idMeal: string; strMeal: string; strMealThumb: string }[]
  >([]);

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
      {/* Calling the header component */}
      <Header />
      <View style={styles.content}>
        <TextInput
          style={styles.search}
          placeholder="Looking for something specific?"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={goToResultsScreen}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <Text style={styles.h1}>Our Meals</Text>
        {/* Using the flatlist to display all the meals ... 
        NOTE : It is the same thing as the Scrollview but 
         the FlatList only renders the items that are 
         visible on the screen */}
        {meals.length === 0 ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <FlatList
            data={meals}
            keyExtractor={(meal) => meal.idMeal}
            renderItem={({ item }) => (
              // The TouchableOpacity is like a button but it allow us to style it as we want
              <TouchableOpacity
                style={styles.mealItem}
                onPress={() => goToMealDetailsScreen(item.idMeal)}
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
      {/* Calling the footer component */}
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
    padding: 20,
  },
  search: {
    backgroundColor: "#1f1f1f",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  searchButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
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
    marginBottom: 20,
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "pink",
    borderWidth: 1,
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    padding: 10,
  },
});
