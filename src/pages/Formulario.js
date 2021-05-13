import React, { useState, Component } from 'react';
import Firebase from "../../config/firebase";
import { View, Text, TextInput } from 'react-native'
import Slider from "@react-native-community/slider"
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base"

export default function Formulario({navigation}) {


    let ActiveUser;//Creacion del Usuario activo
    let date = new Date()
    let day = date.getDate()
    let day2 = date.getDate()
    let month = date.getMonth()+1
    let month2 = date.getMonth()+1
    let Year = date.getFullYear()

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
            <Text>¿Has Tomado suficiente agua esta dia? </Text><Text>{q1}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ1(value) }} />

            <Text>¿Describe tu nivel de estres este dia?  </Text><Text>{q2}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ2(value) }} />


            <Text>¿Has terminado los pendientes que tenias propuestos?</Text><Text>{q3}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ3(value) }} />

            <Text>¿Cual dirias que es tu estado de animo el dia de hoy?</Text><Text>{q4}</Text>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ4(value) }} />

            <Button onPress={() => {
              if(month<10){
                  month2 = "0"+month
              }
              if(day<10){
                day2 = "0"+day
            }
                Firebase.firestore().collection("Formularios").doc(ActiveUser.uid).set({
                    
                    ['Questions--'+day+"--"+month+"--"+Year]:{
                        Question1:q1,
                        Question2:q2,
                        Question3:q3,
                        Question4:q4,
                        Total:q1+q2+q3+q4,
                        
                        dateLog:date},

                    ['Questions--'+day+"--"+month+"--"+Year+"--Array"]:[q1,q2,q3,q4,(q1+q2+q3+q4),(Year+"-"+month2+"-"+day2)]
                    

                },{merge:true})
                navigation.navigate('Principal')
            }}>
                <Text>Enviar Formulario</Text>
            </Button>


        </View>
    )
}