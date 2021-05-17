import { View, Text } from 'react-native'
import React, { useState, Component, useEffect } from 'react';
import {Frases} from '../Frases/Frases'

export default function Graficas({ navigation }) {

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
      


    return (

       <View>
           <Text>{Frase}</Text>
           <Text>{Autor}</Text>
       </View>
    )


}