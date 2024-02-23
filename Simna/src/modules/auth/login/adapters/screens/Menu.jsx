import {} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Image } from "@rneui/base";
import Logo from "../../../../../../assets/img/logo.png";

import { TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
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
});
