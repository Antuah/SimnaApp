import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../../modules/auth/login/adapters/screens/Menu";

const Stack = createStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9CCDDB", 
        },
        headerTintColor: "#072D44",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ title: "Historigrama" }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ title: "Pozos" }}
      />
    </Stack.Navigator>
  );
}
