import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Image } from "@rneui/base";
import { TouchableOpacity } from "react-native";
import HistorigramaGrafica from "../HistorigramaGrafica";

export default function Historigrama({ navigation }) {
  const handlePress = () => {
    alert("Consumo 1000 Litros");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros: </Text>
      <View style={styles.line}></View>
      <View style={styles.row}>
        <Text style={styles.cuerpo}>Fecha</Text>
        <Text style={styles.cuerpo}>Consumo</Text>
        <Text style={styles.cuerpo}>Ubicacion</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowinfo}>
        <Text style={styles.info}>10/10/2021</Text>
        <Text style={styles.center}>1000 Litros</Text>
        <Text style={styles.info}>
          Zapata {"\n"}
          Palo Escrito
        </Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.historigrama}>
        <TouchableOpacity onPress={handlePress}>
          <HistorigramaGrafica />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072D44",
  },
  title: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 20,
    marginLeft: 20,
  },
  historigrama: {
    marginTop: 380,
  },
  center: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 20,
    marginLeft: -0,
    marginRight: 20,
  },
  rowinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 0,
    marginLeft: 10,
  },
  info: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 15,
    marginRight: 10,
  },
  cuerpo: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 20,
  },
  line: {
    marginTop: 10,
    height: 2,
    backgroundColor: "#5790AB",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#072D44",
    fontSize: 16,
    fontWeight: "bold",
  },
});
