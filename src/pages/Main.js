import React, { useState , Component} from 'react';
import Firebase from "../../config/firebase";
import {View,Text} from 'react-native'
import {Container,Content,Header,Form,Input,Item,Button,Label} from "native-base"
export default function NextPage({navigation}) {

    const[email,setEmail] = useState("")

    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setEmail(user.email)
        } else {
          // No user is signed in.
        }
      });
      
     
return (

    <View>
        
           <Button onPress={()=>{
             navigation.navigate('Formulario')
           }} >
             <Text>Formularios</Text>
           </Button>
        
        <Button onPress={()=>{
             navigation.navigate('Graficas')
           }} >
             <Text>Graficas</Text>
           </Button>
    </View>
)


}