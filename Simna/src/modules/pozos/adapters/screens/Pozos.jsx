import React, { useState, useEffect } from "react";
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
import { API_URL } from "@env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Pozos({ navigation }) {
  const [pozos, setPozos] = useState([]); // Array de pozos

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

  //Obtenemos la informacion de los pozos
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

  // Corrige los parámetros de la función cambiarEstado:
  const cambiarEstado = async (id, status) => {
    try {
      console.log("Cambiando estado del pozo id: ", id);
      const token = await getToken();
      const pozoToUpdate = await getPozo(id); // Get current pozo data

      const updatedEstatus = pozoToUpdate.estatus === true ? false : true;

      const updatedPozo = {
        ...pozoToUpdate, // Spread operator to copy existing properties
        estatus: updatedEstatus,
      };

      console.log("Actualizando pozo", updatedPozo);

      const response = await axios.put(`${API_URL}/pozos/${id}`, updatedPozo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedInfo = await getPozo(id);
      setPozos((prevPozos) =>
        prevPozos.map((pozo) => (pozo.id === id ? updatedInfo : pozo))
      );
      console.log("Respuesta del servidor", response.data);
      Alert.alert(
        "Estado del pozo",
        `El pozo ${updatedInfo.nombre} ha sido actualizado`
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Pasa el id del pozo en la función getPozo:
  const getPozo = async (id) => {
    try {
      const token = await getToken();
      const response = await axios.get(`${API_URL}/pozos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPozos();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Actualizar Pozos" onPress={getPozos} />
      <Text style={styles.title}>Registros: </Text>
      <View style={styles.line}></View>
      <View style={styles.row}>
        <Text style={styles.cuerpo}>Porcentaje</Text>
        <Text style={styles.cuerpo}>Capacidad L.</Text>
        <Text style={styles.cuerpo}>Ubicacion</Text>
      </View>
      <View style={styles.line}></View>
      {pozos.map((pozo) => (
        <TouchableOpacity
          key={pozo.id}
          onPress={() => {
            cambiarEstado(pozo.id, pozo.status);
          }}
        >
          <View style={styles.rowinfo}>
            <View style={styles.iconContainer}>
              <Icon
                name="circle"
                type="font-awesome-5"
                size={15}
                color={pozo.estatus ? "#00FF00" : "#FF0000"}
                borderRadius={50}
                marginTop={5}
                marginRight={10}
              />
              <Icon name="water" type="font-awesome-5" color="#FFFFFF" />
            </View>
            <Text style={styles.info}>{pozo.porcentajeAgua}</Text>
            <Text style={styles.info}></Text>
            <Text style={styles.center}>{pozo.capacidadLitros}</Text>
            <Text style={[styles.info, { width: "20%" }]}>
              {pozo.ubicacionPozo}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
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
    marginTop: 10,
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
    height: 2,
    backgroundColor: "#5790AB",
    width: "100%",
    marginTop: 150,
  },
  iconContainer: {
    flexDirection: "row",
  },
});
