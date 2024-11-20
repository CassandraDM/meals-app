import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
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
        <Stack.Screen name="meals-list" options={{ headerShown: false }} />
        <Stack.Screen name="userindex" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
