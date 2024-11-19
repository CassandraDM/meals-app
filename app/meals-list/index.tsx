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
  const router = useRouter();
  const goToMealDetailsScreen = (id: number) => {
    router.push(`/meals-list/${id}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.h1}>Our Meals</Text>
        <FlatList
          data={meals}
          keyExtractor={(meal) => meal.id.toString()}
          renderItem={({ item }) => (
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
