import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Image, Icon } from "@rneui/base"; // Import Icon for the winged circle

import { TouchableOpacity } from "react-native";

export default function Pozos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros: </Text>
      <View style={styles.line}></View>
      <View style={styles.row}>
        <Text style={styles.cuerpo}>Porcentaje</Text>
        <Text style={styles.cuerpo}>Capacidad</Text>
        <Text style={styles.cuerpo}>Ubicacion</Text>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("¿Deseas abrir o cerrar este pozo?");
          
        }}
      >
        <View style={styles.rowinfo}>
          <View style={styles.iconContainer}>
            <Icon
              name="circle"
              type="font-awesome-5"
              color="#00C853"
              style={styles.activity}
            />
            <Icon name="water" type="font-awesome-5" color="#FFFFFF" />
          </View>
          <Text style={styles.info}>80%</Text>
          <Text style={styles.center}>320 Litros</Text>
          <Text style={styles.info}>
            Zapata {"\n"}
            Palo Escrito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072D44",
  },

  row: {
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 85,
    justifyContent: "space-between",
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
    marginTop: 10,
  },
  center: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 0,
    marginRight: -10,
    marginTop: 10,
  },
  cuerpo: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 20,
    marginLeft: 20,
  },
  line: {
    marginTop: 10,
    height: 2,
    backgroundColor: "#5790AB",
    width: "100%",
  },
  activity: {
    width: 10,
    height: 10,
    marginTop: 7,
    marginRight: 10,
    backgroundColor: "#00C853",
  },
  iconContainer: {
    flexDirection: "row", // Arrange icons horizontally
  },
});
