import { Text, View, StyleSheet } from "react-native";

export default function ParameterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Parameter Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "pink",
    fontSize: 20,
    fontWeight: "bold",
  },
});
