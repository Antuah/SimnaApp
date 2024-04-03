// Mobile:
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import {} from "react";
import * as yup from "yup";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import { TextInput, Image } from "react-native";
import Logo from "../../../../../../assets/img/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";

// Mobile:
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = async () => {
    try {
      console.log("Enviando solicitud de inicio de sesión", username, password);
      const response = await axios.post(`${API_URL}/auth/signin`, {
        username: username,
        password: password,
      });
      const usuarioInfo = {
        username: response.data.username,
        password: response.data.password,
        token: response.data.token,
      };
      console.log("Respuesta de inicio de sesión", response.data);
      await AsyncStorage.setItem("usuarioInfo", JSON.stringify(usuarioInfo));
      navigation.navigate("Menu");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Web:
/*
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 30,
  },
  input: {
    width: "80%",
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
};
*/

// Mobile:
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#072D44",
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  input: {
    width: "80%",
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
};
export default Login;
