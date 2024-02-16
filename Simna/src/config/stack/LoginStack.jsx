import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/login/adapters/screens/Login";

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false, // Hide the header
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
