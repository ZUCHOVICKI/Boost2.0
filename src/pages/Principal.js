import React, { useState , Component, useEffect} from 'react';
import Firebase from "../../config/firebase";
import {StyleSheet, View,Text} from 'react-native'
import {Container, Content, Header, Form, Input, Image, Button, Label} from "native-base"
import {Frases} from '../Frases/Frases'
import Video from 'react-native-video'
import BarMenu from '../utils/bottom-bar';

export default function NextPage({navigation}) {
  useEffect(function(){
    navigation.setOptions({
      headerShown:false,
    });  
  });
  const [Frase,setFrase] = useState()
  const [Autor,setAutor] = useState()
  let max = 0
  useEffect(function () {
      Object.keys(Frases).forEach(()=>{
          max+=1
        })
        let num = getRandomInt(0,max)
        console.log(Frases[num])
    
        setAutor(Frases[num].autor)
        setFrase(Frases[num].frase)        
  }, [])

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      
    const[email,setEmail] = useState("")

    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setEmail(user.email)
        } else {
          // No user is signed in.
        }
      });
      /* Para video
      const onBuffer = (data) =>{
    console.log("on buffering-------",data);

        } 
        const videoError = (data) => {
          console.log("Error-------",data);
          
        } 
      <Video source={{uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1"}}   // Can be a URL or a local file.
        onBuffer={onBuffer}               
        onError={videoError}               
        style={styles.backgroundVideo} />*/
return (

    <View style={styles.pantalla}>
      <View style={styles.container}>
      
      </View>
      <View style={styles.container}>
        <Text style={styles.bienvenido}>¡Bienvenidx {"\n"}
        @username! 👋🏻</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.mensaje}>Recuerda:</Text>
      </View>
      <View style={styles.box}>
          <View style={styles.cuadro}>
              <Text style={styles.frase}>{Frase}</Text>
              <Text style={styles.autor}>{Autor}</Text>
          </View>
        </View>  
      <View style={styles.container}>
        <Text style={styles.mensaje}>Daily Boost</Text>
      </View>
      <View style={styles.daily}>
          <View
            style={[styles.caja, { backgroundColor: "powderblue" }]}
          />
          <View
            style={[styles.caja, { backgroundColor: "skyblue" }]}
          />
          <View
            style={[styles.caja, { backgroundColor: "steelblue" }]}
          />
          <View
            style={[styles.caja, { backgroundColor: "steelblue" }]}
          />
          <View
            style={[styles.caja, { backgroundColor: "powderblue" }]}
          />
          <View
            style={[styles.caja, { backgroundColor: "skyblue" }]}
          />
          <View
            style={[styles.caja, { backgroundColor: "steelblue" }]}
          />
          <View
            style={[styles.caja, { backgroundColor: "steelblue" }]}
          />
      </View>
      <View style={styles.container}>
        <Text style={styles.mensaje}>Este video es para ti:</Text>
      </View>
      <View style={styles.container}>
        
      </View>
      <BarMenu></BarMenu>
     
      
    </View>
  )
  }
/* <View style={styles.barra}>
        <Text>
           <Button onPress={()=>{
             navigation.navigate('Formulario')
           }} >
             <Text>Formularios</Text>
           </Button>
        </Text>

        <Text>
           <Button onPress={()=>{
             navigation.navigate('Graficas')
           }} >
             <Text>Graficas</Text>
           </Button>
        </Text>
        <Text>
           <Button onPress={()=>{
             navigation.navigate('Animo')
           }} >
             <Text>Animo Diario</Text>
           </Button>
        </Text>
      </View>*/
const styles = StyleSheet.create({
  backgroundVideo:{
    height:300,
    width: 300,
  },
  pantalla:{
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#0A0B3E",
  },
  box:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 700,
  },
  daily: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: 'stretch',
    flexWrap: "wrap",
    height: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    justifyContent: 'center',
  },
  cuadro:{
    flex: 1,
    height: 500,
    width: 360,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  caja:{
    width: 60,
    height: 60,
    margin: 10,
  },
  bienvenido: {
    color: 'white',
    fontSize: 35,
    textAlign: "left",
    color: 'white',
    fontWeight: "bold",
    marginVertical: 8,
    marginHorizontal: 20,
  },
  mensaje: {
    color: 'white',
    fontSize: 22,
    textAlign: "left",
    color: 'white',
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
  barra:{
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#0A0B3E",
  },
  frase:{
    color: 'white',
    fontSize: 18,
    textAlign: "center",
    color: 'white',
  },
  autor:{
    color: 'white',
    fontSize: 18,
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
  }

});