import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyleSheet, View, Text, Image } from "react-native";
import { Input, Button } from "@rneui/base";
import AuthContext from "../../../../../config/context/auth.context";
import AxiosClient from "../../../../../config/client/axios-client";
import Logo from "../../../../../../assets/img/logo.png";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo electrónico no válido")
        .required("Correo electrónico obligatorio"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Contraseña obligatoria"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await AxiosClient.post("/auth/login", values);
        if (response.data) {
          signIn(response.data); // Guarda el usuario en el contexto
          await AsyncStorage.setItem(
            "userToken",
            JSON.stringify(response.data)
          ); // Almacena el token de usuario
          navigation.navigate("Home");
        } else {
          setError("Usuario o contraseña incorrectos");
        }
      } catch (error) {
        setError("Usuario o contraseña incorrectos");
        error.response && console.log(error.response.data);
      }
    },
  });

  const testAxiosConnection = async () => {
    try {
      const response = await AxiosClient.get("/test");
      console.log("Respuesta del backend:", response.data);
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
    }
  };

  useEffect(() => {
    testAxiosConnection(); // Llama a la función de prueba al cargar el componente
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Input
        placeholder="Correo"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        style={styles.input}
        name="email"
      />
      {formik.touched.email && formik.errors.email && (
        <Text style={styles.error}>{formik.errors.email}</Text>
      )}
      <Input
        placeholder="Contraseña"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        secureTextEntry
        style={styles.input}
        name="password"
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Button
        title="Iniciar Sesión"
        style={styles.button}
        onPress={formik.handleSubmit}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
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
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default Login;
