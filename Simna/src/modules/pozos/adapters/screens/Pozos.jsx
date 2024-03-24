import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Image, Icon } from "@rneui/base";
import mapa from "../../../../../assets/img/mapa.png";

export default function Pozos({ navigation }) {
  const [isChanged, setIsChanged] = useState(false); // State to track change
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
          Alert.alert("Se a cambiado el estado del pozo");
          setIsChanged(!isChanged);
        }}
      >
        <View style={styles.rowinfo}>
          <View style={styles.iconContainer}>
            <Icon
              name="circle"
              type="font-awesome-5"
              size={15}
              color={isChanged ? "#FF0000" : "#00C853"}
              backgroundColor={isChanged ? "#FF0000" : "#00C853"}
              borderRadius={50}
              marginTop={5}
              marginRight={10}
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
      <View style={styles.line2}></View>
      <Image source={mapa} style={styles.mapa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072D44",
  },
  mapa: {
    width: 380,
    height: 380,
    marginTop: 10,
    marginLeft: 6,
    marginBottom: 100,
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
  line2: {
    marginTop: 10,
    height: 2,
    backgroundColor: "#5790AB",
    width: "100%",
    marginTop: 250,
  },
  iconContainer: {
    flexDirection: "row",
  },
});
