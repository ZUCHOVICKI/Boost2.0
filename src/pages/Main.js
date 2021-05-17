import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import {
    Poppins_700Bold,
} from "@expo-google-fonts/dev/index";

export default function Main({ navigation }) {

    useEffect(function () {
        navigation.setOptions({
            headerShown: false,

        });
    });

    return (

        // <TouchableWithoutFeedback onPress={() => {
        //     navigation.navigate('Login')
        // }}>
            <View style={styles.container} >
                <Image
                    style={styles.WorkflowTeamwork}
                    source={require('../img/WorkflowTeamwork.png')}
                />

                <Text style={styles.Ayuda}>Ayuda a templar el mar de la mente</Text>
                <Text style={styles.AyudaVersion}>Ayudate a ser la mejor versión de tí un paso a la vez con trabajo diario</Text>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignIn')
                        }}
                        style={styles.Registrarme}>
                        
                        <Text style={styles.TextoRegistro}>Registrarme</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                        style={styles.IniciarSesion}>
                        
                        <Text style={styles.TextoIniciarSesion}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>                

                <SafeAreaView style={styles.topSafeArea}>
                    <StatusBar style="auto" />
                </SafeAreaView>

            </View>
        // </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0A0B3E",
        alignItems: "center",
        justifyContent: "center",
    },
    topSafeArea: {
        backgroundColor: 'white',
    },
    WorkflowTeamwork: {
        width: 270,
        height: 270,
    },
    Ayuda: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 18,
        fontSize: 20,
        textAlign: "center",
        color: 'white',
        fontFamily: "Poppins",
        fontWeight: "bold",
    },
    AyudaVersion: {
        padding: 2,
        marginHorizontal: 20,
        fontSize: 15,
        textAlign: "center",
        color: 'white',
    },
    Registrarme: {
        backgroundColor: "#ffffff",
        marginTop: 34,
        width: 140,
        height: 45,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    TextoRegistro: {
        fontSize: 17, 
        color: '#0A0B3E',
        fontWeight: "bold",
        paddingTop: 30,
        paddingBottom: 30,
        padding: 10,
    },
    IniciarSesion: {
        backgroundColor: "#0A0B3E",
        marginTop: 34,
        width: 140,
        height: 45,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'white',
    },
    TextoIniciarSesion: {
        fontSize: 15, 
        color: 'white',
        fontWeight: "bold",
        paddingTop: 30,
        paddingBottom: 30,
        padding: 10,
    },
});
