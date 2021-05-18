import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Firebase from "../../config/firebase";
import firestore from "../../config/firebase";
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base";
import Principal from './Principal';
import Formulario from './Formulario';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {

  useEffect(function () {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "right",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#0A0B3E'
      }
    });
  });

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  let today = new Date()

  return (

    <View style={styles.container}>
      <Container style={styles.container}>
        <Text style={styles.bienvenido}>¡Bienvenido! 👋🏻</Text>
        <Text style={styles.nuevo}>Te hemos extrañado mucho, ¡Qué alegría verte de nuevo!</Text>

        <Form style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Item floatingLabel style={styles.inputLogin}>
            <Input
              placeholder='Nombre de Usuario'
              placeholderTextColor='white'
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setUsername}
              value={username}
              style={{ color: 'white' }}
            />

          </Item>
          <Item floatingLabel style={styles.inputLogin}>
            <Input
              placeholder='Correo Electrónico'
              placeholderTextColor='white'
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              style={{ color: 'white' }}
            />

          </Item>

          <Item floatingLabel style={styles.inputLogin}>
            <Input
              placeholder='Contraseña'
              placeholderTextColor='white'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
              style={{ color: 'white' }}
            />
          </Item>

          <Text style={styles.con}>O inicia sesión con:</Text>

          <Image
            style={styles.google}
            source={require('../img/GoogleIcon.png')}
          />

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ color: 'white' }}>¿No tienes una cuenta? </Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }} onPress={() => {
              navigation.navigate('SignIn')
            }}>Regístrate</Text>
          </View>

          <Button style={styles.iniciarsesion}
            full rounded
            onPress={() => {
              try {
                Firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {

                  var userActive = Firebase.auth().currentUser;
                  Firebase.firestore().collection("Users").doc(userActive.uid).set({
                    name: username,
                    email: email,
                    DateLog: today

                  })

                  console.log(userActive)
                  navigation.navigate('Principal')
                }).catch((error) => {
                  alert(error)
                  // alert("Contraseña o Correo Incorrectos")
                })
              }
              catch (error) {
                console.log(error.toString())
              }
            }}
          >
            <Text style={styles.text}>
              Iniciar Sesión
          </Text>
          </Button>

        </Form>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    justifyContent: 'center',
  },
  text: {
    color: '#0A0B3E',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bienvenido: {
    color: 'white',
    fontSize: 25,
    textAlign: "left",
    color: 'white',
    fontWeight: "bold",
    marginVertical: 8,
    marginHorizontal: 20,
  },
  nuevo: {
    color: 'white',
    fontSize: 20,
    textAlign: "left",
    color: 'white',
    fontWeight: "bold",
    // padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  inputLogin: {
    justifyContent: 'center',
    width: '85%',
    height: 50,
    color: 'white',
    // marginVertical: 20,
    paddingLeft: 10,
    paddingBottom: 15,
    marginHorizontal: 20,
    backgroundColor: '#1C0954',
    borderRadius: 8,
    borderColor: 'white',
    borderStartWidth: 1,
  },
  con: {
    color: 'white',
    fontSize: 15,
    textAlign: "left",
    color: 'white',
    fontWeight: "bold",
    // padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  iniciarsesion: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 40,
    width: '80%',
    alignSelf: 'center',
  },
  google: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
});