import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function Main({ navigation }) {

    useEffect(function () {
        navigation.setOptions({
            headerShown: false,

        });
    });

    return (
        <View style={styles.container}>
            <Image
                style={styles.WorkflowTeamwork}
                source={require('../img/WorkflowTeamwork.png')}
            />

            <Text >Hola.</Text>
            <TextInput


                placeholder="Usuario"
            />
            <TextInput


                placeholder="Contraseña"
                secureTextEntry={true}
            />



            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0A0B3E",
        alignItems: "center",
        justifyContent: "center",
    },
    WorkflowTeamwork: {
        width: 20,
        height: 20,
    },

});
