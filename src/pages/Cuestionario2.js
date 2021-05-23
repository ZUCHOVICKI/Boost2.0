import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
//import CustomButton from '../Components/CustomButton';
import  AsyncStorage from '@react-native-async-storage/async-storage';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    // color: 'white',
},
Vamos: {
    padding: 5,
    paddingTop: 100,
    marginHorizontal: 16,
    fontSize: 30,
    textAlign: "left",
    color: 'white',
    // fontFamily: "Poppins",
    fontWeight: 'bold',
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
        <Text style={styles.Vamos}>hola
        
        </Text>
        
      </View>
    );
  }
  