import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Image } from '@rneui/base';

import { TouchableOpacity } from 'react-native';

export default function Pozos({ navigation }) {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Consultar Pozos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#072D44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#072D44',
        fontSize: 16,
        fontWeight: 'bold',
    },
});