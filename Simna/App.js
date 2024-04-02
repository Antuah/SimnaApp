import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/config/navigation/Navigation";
import AuthContext from "./src/config/context/auth.context";
import { useEffect } from "react";
import { useReducer } from "react";
import { authManager } from "./src/config/context/auth.manager";
import AppRouter from "./src/router/AppRouter";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Web:
/*const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { signed: false };
};
*/

//Movil:
const init = async () => {
  try {
    const userString = await AsyncStorage.getItem("user");
    if (userString) {
      return JSON.parse(userString);
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
  }
  return { signed: false };
};

export default function App() {
  const [user, dispatch] = useReducer(authManager, {}, init);
  //Web:
  /*useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }
  */
  //Movil:
  useEffect(() => {
    if (!user) return;
    AsyncStorage.setItem("user", JSON.stringify(user)); // <-- Usa AsyncStorage
  });

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}
