import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import meals from "../meals.json";
import { useLocalSearchParams } from "expo-router";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function MealDetailsScreen() {
  const { id } = useLocalSearchParams(); // Get the id from the URL
  const meal = meals.find((meal) => meal.id.toString() === id); // Find the meal by id

  if (!meal) {
    // If the meal is not found, display a message
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Meal not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Display the Header component */}
      <Header />
      <View style={styles.content}>
        {/* Display the meal image, title, description, and category */}
        <Image source={{ uri: meal.image }} style={styles.image} />
        <Text style={styles.h1}>{meal.title}</Text>
        <Text style={styles.text}>{meal.description}</Text>
        <Text style={styles.category}>{meal.category}</Text>
      </View>
      {/* Display the Footer component */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingHorizontal: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
    marginBottom: 10,
    textAlign: "center",
  },
  category: {
    fontSize: 14,
    color: "#ff6347",
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
});
