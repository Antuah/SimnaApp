import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Image } from "@rneui/base";
import { TouchableOpacity } from "react-native";
import HistorigramaGrafica from "../HistorigramaGrafica";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Historigrama({ navigation }) {
  const [pozos, setPozos] = useState([]); // Array de pozos
  const handlePress = () => {
    alert("Consumo 1000 Litros");
  };

  //Obtenemos el token del usuario
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("usuarioInfo");
      if (value !== null) {
        const token = JSON.parse(value).token;
        return token;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Pasa el id del pozo en la función getPozo:
  const getPozos = async () => {
    console.log("Obteniendo pozos");
    try {
      const token = await getToken();
      const response = await axios.get(`${API_URL}/pozos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Respuesta del servidor", response.data);
      setPozos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPozos();
  }, []);

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

      {pozos.map((pozo) => (
        <View key={pozo.id} style={styles.row}>
          <Text style={styles.info}>{pozo.fecha}10</Text>
          <Text style={styles.center}>{pozo.consumo} Litros</Text>
          <Text style={[styles.info, { width: "20%" }]}>
            {pozo.ubicacionPozo}
          </Text>
        </View>
      ))}

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
    marginLeft: 10,
  },
  info: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 15,
    marginRight: -15,
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
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
