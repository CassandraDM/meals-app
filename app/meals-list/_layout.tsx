import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function MealsListLayout() {
  return (
    <>
      {/* Style the bar where the hour, battery, ... is displayed */}
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack>
        {/* Using Stack to manage the navigation structure within the app */}
        {/* Each Stack.screen represent an individual screen */}
        <Stack.Screen
          name="index"
          options={{
            title: "Meals",
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
          name="[id]"
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
        <Stack.Screen
          name="random"
          options={{
            title: "Random Meal",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "pink",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </>
  );
}
