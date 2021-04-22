import React, { useState, Component } from 'react';
import Firebase from "../../config/firebase";
import { View, Text, TextInput } from 'react-native'
import Slider from "@react-native-community/slider"
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base"

export default function Formulario({navigation}) {


    let ActiveUser;//Creacion del Usuario activo
    let date = new Date()

    //Validación de si el Usuario este Logeado
    Firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            ActiveUser = Firebase.auth().currentUser;
        } else {
            console.log("NO USER")
        }
    });


    //Hooks de valores de los diferentes Sliders 
    const [q1, setQ1] = useState(5)
    const [q2, setQ2] = useState(5)
    const [q3, setQ3] = useState(5)
    const [q4, setQ4] = useState(5)


    return (
        <View>
            <Text>Pregunta 1 </Text><Text>{q1}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ1(value) }} />

            <Text>Pregunta 2 </Text><Text>{q2}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ2(value) }} />

            <Text>Pregunta 3</Text><Text>{q3}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ3(value) }} />

            <Text>Pregunta 4 </Text><Text>{q4}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ4(value) }} />

            <Button onPress={() => {

                Firebase.firestore().collection("Formularios").doc(ActiveUser.uid).set({
                    Question1:q1,
                    Question2:q2,
                    Question3:q3,
                    Question4:q4,
                    dateLog:date

                })
                navigation.navigate('Main')
            }}>
                <Text>Enviar Formulario</Text>
            </Button>


        </View>
    )
}