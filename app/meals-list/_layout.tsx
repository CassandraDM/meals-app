import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function MealsListLayout() {
  return (
    <>
      <Stack>
        {/* Using Stack to manage the navigation structure within the app */}
        {/* Each Stack.screen represent an individual screen */}
        <Stack.Screen
          name="details/[id]"
          options={{
            title: "Meal Details",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "pink",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="search/[query]"
          options={{
            title: "Results",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "pink",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
