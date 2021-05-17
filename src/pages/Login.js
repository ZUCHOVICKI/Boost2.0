import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Firebase from "../../config/firebase";
import firestore from "../../config/firebase";
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base";
import Principal from './Principal';
import Formulario from './Formulario';

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

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")

  let today = new Date()  

  return (
    
    <Container style={styles.container}>
      <Form>

      <Item floatingLabel>
          <Label>Username</Label>
          <Input
          autoCorrect={false}
          autoCapitalize = "none"
          onChangeText = {setUsername}
          value = {username}
          />
        
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
          autoCorrect={false}
          autoCapitalize = "none"
          onChangeText = {setEmail}
          value = {email}
          />
        
        </Item>

        <Item floatingLabel>
          <Label>Contraseña</Label>
          <Input
          secureTextEntry ={true}
          autoCorrect={false}
          autoCapitalize = "none"
          onChangeText = {setPassword}
          value = {password}
          />
        
        </Item>

        <Button style={styles.buttons}
        full rounded 
        onPress={()=>{
          try{
            Firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
              
              var userActive = Firebase.auth().currentUser;
              Firebase.firestore().collection("Users").doc(userActive.uid).set({
                name:username,
                email:email,
                DateLog : today

              })
              
              console.log(userActive)
              navigation.navigate('Principal')
            }).catch((error)=>{
              alert(error)
              // alert("Contraseña o Correo Incorrectos")
            })            
          }
          catch(error){
            console.log(error.toString())
          }
        }}
        >
          <Text style={styles.text}>
            Login
          </Text>
        </Button>

      </Form>
    </Container>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    
    justifyContent: 'center',
  },
  buttons:{
    marginTop:50,
    
  },
  text:{
    color: 'white',
  }
});