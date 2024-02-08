import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/login/adapters/screens/Login";

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#9CCDDB", // Change the color here
                },
                headerTintColor: "#072D44",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: "Inicia sesión" }}
            />
        </Stack.Navigator>
    );
}
