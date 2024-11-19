import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import meals from "./meals.json";
import { useRouter } from "expo-router";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Index() {
  // Calling the useRouter hook to navigate to different screens
  const router = useRouter();
  // Function to navigate to the screen of the list of the meals
  const goToMealsListScreen = () => {
    router.push(`/meals-list`);
  };
  // Function to navigate to the screen of the details of one meal
  const goToMealDetailsScreen = (id: number) => {
    router.push(`/meals-list/${id}`);
  };
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
          <View key={meal.id}>
            {/* The TouchableOpacity is like a button but it
            allow us to style it as we want */}
            <TouchableOpacity
              style={styles.mealItem}
              onPress={() => goToMealDetailsScreen(meal.id)}
            >
              <Image source={{ uri: meal.image }} style={styles.mealImage} />
              <Text style={styles.mealTitle}>{meal.title}</Text>
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
    fontSize: 18,
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
