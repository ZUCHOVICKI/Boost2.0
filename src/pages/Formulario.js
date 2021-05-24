import React, { useState, Component, useEffect } from 'react';
import Firebase from "../../config/firebase";
import { View, Text, ScrollView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from "@react-native-community/slider"
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base"

export default function Formulario({navigation}) {

    useEffect(function () {
    navigation.setOptions({
        headerShown: false,
    });
    });

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
        <View style={ styles.container }>
            <TouchableOpacity onPress={() => { navigation.navigate('Principal')}}>
                <Image
                style={styles.back}
                source={require('../img/Back_Icon.png')}
                />
            </TouchableOpacity>
            <View style={styles.preg2}></View>
            <ScrollView>
            <Text style={styles.preg}>¿Has Tomado suficiente agua esta dia?  </Text><Text style={styles.num}>{q1}</Text>
            <View style={ styles.sld}>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ1(value) }} />
            </View>

            <Text style={styles.preg}>Describe tu nivel de estres este dia  </Text><Text style={styles.num}>{q2}</Text>
            <View style={ styles.sld}>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ2(value) }} />
            </View>

            <Text style={styles.preg}>¿Has terminado los pendientes que tenias propuestos?</Text><Text style={styles.num}>{q3}</Text>
            <View style={ styles.sld}>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ3(value) }} />
            </View>

            <Text style={styles.preg}>¿Cual dirias que es tu estado de animo el dia de hoy?</Text><Text style={styles.num}>{q4}</Text>
            <View style={ styles.sld}>
            <Slider style={{ width: 250, height: 50 }} minimumValue={0} maximumValue={10} value={5} step={1} onValueChange={(value) => { setQ4(value) }} />
            </View>

            <Button style={styles.conti} onPress={() => {
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
                navigation.navigate('Graficas')
            }}>
                <Text style={styles.text}>Continuar</Text>
                <Image
                    style={styles.sig}
                    source={require('../img/Arrow2.png')}
                />
            </Button>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    // color: 'white',
    },
  preg: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    left: 2,
    marginHorizontal: 16,
    textAlign: "center",
    marginTop: 10,
    },
  preg2: {
    marginVertical:-22,
    },
  num: {
    color: 'white',
    textAlign: 'center',
    bottom: 1,
    },
  sld: {
    backgroundColor: "#D9CAF4",
    width: 250,
    left: 50,
    borderRadius:15,
  },
  conti: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '80%',
    // alignSelf: 'center',
    marginTop: 30,
    left: 31,
  },
  text: {
    color: '#0A0B3E',
    fontWeight: 'bold',
    fontSize: 18,
    left: 21,
  },
  back: {
    marginVertical: 45,
    left: 12,
    width: 30,
  },
  sig: {
    right: 8,
  },
});