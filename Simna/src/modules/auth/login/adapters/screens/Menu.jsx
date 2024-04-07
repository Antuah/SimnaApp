import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Image } from "@rneui/base";
import Logo from "../../../../../../assets/img/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TouchableOpacity } from "react-native";

export default function Menu({ navigation }) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");

      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        containerStyle={styles.logoContainer}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Historigrama");
        }}
      >
        <Text style={styles.buttonText}>Consultar Historigrama</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Pozos");
        }}
      >
        <Text style={styles.buttonText}>Consultar Pozos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOut} onPress={handleLogout}>
        <Text style={styles.textOut}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072D44",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#072D44",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 320,
    height: 320,
    resizeMode: "contain",
  },
  logoContainer: {
    marginBottom: 16,
  },
  textOut: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnOut: {
    width: 180,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
