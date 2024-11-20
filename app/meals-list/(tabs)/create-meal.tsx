import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function CreateMealScreen() {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const handleChangeInstructions = (text: string) => {
    setInstructions(text);
  };

  const handleChangeCategory = (text: string) => {
    setCategory(text);
  };

  const handleCreate = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/create.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          instructions,
          category,
        }),
      }
    );
    console.log("~ 🐈‍⬛🐈 ~ handleCreate ~ response:", response);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.h1}>Create a Meal!</Text>

        <Text style={styles.warning}>
          This service is currently not available.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Meal Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={handleChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Instructions"
          placeholderTextColor="#888"
          value={instructions}
          onChangeText={handleChangeInstructions}
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          placeholderTextColor="#888"
          value={category}
          onChangeText={handleChangeCategory}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleCreate}>
          <Text style={styles.searchButtonText}>Create Meal</Text>
        </TouchableOpacity>
      </View>
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
    width: "100%",
    paddingTop: 20,
  },
  warning: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
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
});
