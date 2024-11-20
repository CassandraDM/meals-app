import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MealsListTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-meal"
        options={{
          title: "Create Meal",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "pink",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shuffle" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
