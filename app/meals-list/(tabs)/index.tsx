import React, { useState } from "react";
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
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Swipeable } from "react-native-gesture-handler";
import useGetMeals from "@/hook/useGetMeals";

export default function MealsList() {
  // Calling the useRouter hook to navigate to different screens
  const [search, setSearch] = useState("");

  const router = useRouter();
  // Function to navigate to the screen of the details of one meal
  const goToMealDetailsScreen = (idMeal: string) => {
    router.push(`/meals-list/details/${idMeal}`);
  };

  const goToResultsScreen = () => {
    router.push(`/meals-list/search/${search}`);
  };

  const meals = useGetMeals();

  const MealActions = ({ meal }: { meal: { idMeal: string } }) => {
    return (
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToMealDetailsScreen(meal.idMeal)}
          style={styles.seeMealButton}
        >
          <Text style={styles.seeMealText}>See Meal</Text>
        </TouchableOpacity>
      </View>
    );
  };

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
              // The onPress function is used to call the goToMealDetailsScreen function
              <Swipeable renderRightActions={() => <MealActions meal={item} />}>
                <View style={styles.mealItem}>
                  <Image
                    source={{ uri: item.strMealThumb }}
                    style={styles.mealImage}
                  />
                  <Text style={styles.mealTitle}>{item.strMeal}</Text>
                </View>
              </Swipeable>
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
  actionsContainer: {
    padding: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  deleteButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  seeMealButton: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  seeMealText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
