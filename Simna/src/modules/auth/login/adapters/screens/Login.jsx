import { useState } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { Input, Button, Icon, Image } from "@rneui/base";
import Logo from "../../../../../../assets/img/logo.png";
import { isEmpty } from "lodash";

export default function Login({ navigation }) {
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setError("Todos los campos son obligatorios");
    } else {
      setError("");
      navigation.navigate("Menu");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Input
        placeholder="Correo"
        value={email}
        onChangeText={setUser}
        style={styles.input}
        leftIcon={<Icon name="email" color={"white"} />}
        inputStyle={styles.inputText}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        leftIcon={<Icon name="lock" color={"white"} />}
        rightIcon={
          <Icon
            color={"white"}
            name={showPassword ? "visibility" : "visibility-off"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        secureTextEntry={showPassword}
        inputStyle={styles.inputText}
      />
      <Button title="Iniciar Sesión" style={styles.button} onPress={handleLogin} />
      <Text style={styles.error}>{error}</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072D44",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    marginVertical: 10,
  },
  inputText: {
    color: "gray",
  },
  button: {
    width: 200,
    height: 50,
    marginVertical: 10,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
  logoContainer: {
    marginBottom: 20,
  },
  error: {
    color: "red",
  },
});
