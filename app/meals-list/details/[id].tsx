import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import useGetMeal from "@/hook/useGetMeal";

export default function MealDetailsScreen() {
  const meal = useGetMeal();

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
      <ScrollView>
        <View style={styles.content}>
          {/* Display the meal image, title, description, and category */}
          <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
          <Text style={styles.h1}>{meal.strMeal}</Text>
          <Text style={styles.category}>{meal.strCategory}</Text>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
          </View>
        </View>
      </ScrollView>
      {/* Display the Footer component */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingHorizontal: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
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
  },
  instructionsContainer: {
    backgroundColor: "#1f1f1f",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: "#dddddd",
    lineHeight: 24,
  },
  category: {
    fontSize: 14,
    color: "#ff6347",
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
});
