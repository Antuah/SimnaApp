//Web:
/*
import React, { useContext } from "react";
import Menu from "../modules/auth/login/adapters/screens/Menu";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthContext from "../config/context/auth.context";
import Login from "../modules/auth/login/adapters/screens/Login";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user?.signed ? (
          <Route path="/" element={<Menu />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
*/
//Movil:
import * as React from "react";
import Menu from "../modules/auth/login/adapters/screens/Menu";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "../config/context/auth.context";
import Login from "../modules/auth/login/adapters/screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user?.signed ? "Menu" : "Login"}
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#9CCDDB",
          },
          headerTitleStyle: {
            color: "#072D44",
          },
        }}
      >
        {user?.signed ? (
          <Stack.Screen name="Menu" component={Menu} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
