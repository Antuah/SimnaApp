import {} from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { TouchableOpacity } from "react-native";

export default function Login(props) {
    console.log("Login props:", props);
    const { name, lastname, age } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    alert("Consultar Historigrama");
                }}
            >
                <Text style={styles.buttonText}>Consultar Historigrama</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    alert("Consultar Datos");
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
        marginVertical: 10,
    },
    buttonText: {
        color: "#072D44",
        fontSize: 16,
        fontWeight: "bold",
    },
});
