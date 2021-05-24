import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Button, Label } from "native-base";
//import CustomButton from '../Components/CustomButton';
import  AsyncStorage from '@react-native-async-storage/async-storage';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    // color: 'white',
},
Constesta: {
    padding: 5,
    bottom: 19,
    marginHorizontal: 16,
    fontSize: 30,
    textAlign: "left",
    color: 'white',
    // fontFamily: "Poppins",
    fontWeight: 'bold',
},
back: {
    marginVertical: 50,
    left: 12,
    width: 30,
},
icon: {
    left: 40,
    // width: 80,
    bottom: 13,
},
estas: {
    padding: 5,
    bottom: 17,
    marginHorizontal: 16,
    fontSize: 18,
    textAlign: "left",
    color: 'white',
    left: 110,
    // bottom: 40,
},
text: {
  color: '#0A0B3E',
  fontWeight: 'bold',
  fontSize: 18,
  left: 21,
},
listo: {
  backgroundColor: 'white',
  borderRadius: 8,
  marginBottom: 40,
  width: '38%',
  alignSelf: 'center',
},
});


export default function Login({ navigation }) {
  useEffect(function () {
    navigation.setOptions({
        headerShown: false,
    });
});
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={() => { navigation.navigate('ChooseAvatar')}}>
          <Image
            style={styles.back}
            source={require('../img/Back_Icon.png')}
          />
        </TouchableOpacity>
        <Text style={styles.Constesta}>Contesta este pequeño cuestionario.</Text>

        <Image
            style={styles.icon}
            source={require('../img/icon_av.png')}
          />
        
        <Text style={styles.estas}>¿Estas listx?</Text>
        <Button style={styles.listo} onPress={() => {
              try {
                  navigation.navigate('Formulario')
              }
              catch (error) {
                console.log(error.toString())
              }
            }}>
      <Text style={styles.text}>
          ¡Comenzar!
      </Text>
      </Button>
      </View>
    );
  }
  