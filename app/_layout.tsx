import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
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
            title: "Home",
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
          name="meals-list/index"
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
          name="meals-list/[id]"
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
      </Stack>
    </>
  );
}
