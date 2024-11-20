import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ParameterScreen from "./parameter";
import UserScreen from "./user";

export default function ParametersDrawerLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "pink",
        drawerInactiveTintColor: "grey",
        drawerStyle: {
          backgroundColor: "black",
        },
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "pink",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="parameters"
        component={ParameterScreen}
        options={{
          title: "Parameters",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "pink",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="user"
        component={UserScreen}
        options={{
          title: "User",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "pink",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}