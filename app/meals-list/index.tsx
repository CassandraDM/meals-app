import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import meals from "../meals.json";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function CocktailsList() {
  // Calling the useRouter hook to navigate to different screens
  const router = useRouter();
  // Function to navigate to the screen of the details of one meal
  const goToMealDetailsScreen = (id: number) => {
    router.push(`/meals-list/${id}`);
  };

  return (
    <View style={styles.container}>
      {/* Calling the header component */}
      <Header />
      <View style={styles.content}>
        <Text style={styles.h1}>Our Meals</Text>
        {/* Using the flatlist to display all the meals ... 
        NOTE : It is the same thing as the Scrollview but 
         the FlatList only renders the items that are 
         visible on the screen */}
        <FlatList
          data={meals}
          keyExtractor={(meal) => meal.id.toString()}
          renderItem={({ item }) => (
            // The TouchableOpacity is like a button but it allow us to style it as we want
            <TouchableOpacity
              style={styles.mealItem}
              onPress={() => goToMealDetailsScreen(item.id)}
            >
              <Text style={styles.mealTitle}>{item.title}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: 200 }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Calling the footer component */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  h1: {
    fontSize: 32,
    color: "pink",
    marginBottom: 10,
    textAlign: "center",
  },
  mealsContent: {
    flex: 1,
    width: "100%",
  },
  mealItem: {
    backgroundColor: "#333",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: "pink",
    borderWidth: 1,
  },
  mealTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    color: "white",
  },
});
