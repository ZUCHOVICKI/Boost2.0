import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView ,TouchableWithoutFeedback} from "react-native";
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

        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate('Login')
        }}>
        <View style={styles.container} >
            <Image 
                style={styles.WorkflowTeamwork}
                source={require('../img/WorkflowTeamwork.png')}
            />

            <Text style={styles.Ayuda}>Ayuda a templar el mar de la mente</Text>    
            <Text style={styles.AyudaVersion}>Ayudate a ser la mejor versión de tí un paso a la vez con trabajo diario</Text>



            <SafeAreaView style={styles.topSafeArea}>
                <StatusBar style="auto" />
            </SafeAreaView>
            
        </View>
        </TouchableWithoutFeedback>
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
        width: 300,
        height: 300,
    },
    Ayuda: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 20,
        textAlign: "center",
        color: 'white',
        fontFamily: "Poppins",
    },
    AyudaVersion: {
        padding: 2,
        marginHorizontal: 20,
        fontSize: 15,
        textAlign: "center",
        color: 'white',
    }

});
