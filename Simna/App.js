import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/config/navigation/Navigation";
import AuthContext from "./src/config/context/auth.context";
import { useEffect } from "react";
import { useReducer } from "react";
import { authManager } from "./src/config/context/auth.manager";
import AppRouter from "./src/router/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { signed: false };
};

export default function App() {
  const [user, dispatch] = useReducer(authManager, {}, init);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}
