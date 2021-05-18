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

export default function SignIn({ navigation }) {

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
        <Text style={styles.vamos}>¡Vamos a registrarte!</Text>
        <Text style={styles.vida}>¡Estás por tomar acciones que cambiarán tu vida!</Text>

        <Form style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Item floatingLabel style={styles.inputRegistro}>
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

          <Item floatingLabel style={styles.inputRegistro}>
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

          <Item floatingLabel style={styles.inputRegistro}>
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

          <Text style={styles.con}>O regístrate con:</Text>
          
          <Image
            // style={styles.google}
            source={require('../img/GoogleIcon.png')}
          />

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ color: 'white' }}>¿Ya tienes una cuenta? </Text>
            <Text style={{ color: 'white', fontWeight: 'bold'}} onPress={() => {
              navigation.navigate('Login')
            }}>Inicia Sesión</Text>
          </View>

          <Button style={styles.registrarme}
            full rounded
            onPress={() => {
              try {
                if (password.length < 6) {
                  alert("Contraseña Menor a 6 Caracteres")
                  return
                }
                Firebase.auth().createUserWithEmailAndPassword(email, password)
              }
              catch (error) {
                console.log(error.toString())
              }
            }}
          >
            <Text style={styles.text}>
              Registrarme
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
  vamos: {
    color: 'white',
    fontSize: 25,
    textAlign: "left",
    color: 'white',
    fontWeight: "bold",
    marginVertical: 8,
    marginHorizontal: 20,
  },
  vida: {
    color: 'white',
    fontSize: 20,
    textAlign: "left",
    color: 'white',
    fontWeight: "bold",
    // padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  inputRegistro: {
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
  registrarme: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 50,
    width: '80%',
    alignSelf: 'center',
  },
  google: {
    width: 300,
    height: 300,
    // marginBottom: 10,
  },
});
