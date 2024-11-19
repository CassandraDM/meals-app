import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack>
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
