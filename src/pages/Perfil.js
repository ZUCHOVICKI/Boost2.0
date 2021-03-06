import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import BarMenu from '../utils/bottom-bar';
import ChallengeCard from '../utils/challege-card';

export default function Perfil({ navigation }) {
    useEffect(function () {
      navigation.setOptions({
          headerShown: false,
      });
  });
return (

   <View style={profileStyles.container}>
       {/* Header */}
       <View style={profileStyles.header}>
           <View style={profileStyles.header__leftBlock}>
               <Image style={profileStyles.leftBlock__img} source={require('../img/man-profile.jpg')}></Image>
           </View>
           <View style={profileStyles.header__rightBlock}>
               <View style={profileStyles.rightBlock__texts}>
                <Text style={profileStyles.texts__text}>Tiempo:</Text>
                <Text style={profileStyles.texts__text_bold}>3 Meses</Text>
               </View>
               <View  style={profileStyles.rightBlock__imgContainer}>
                   <Image style={profileStyles.rightBlock__img} source={require('../img/log-out.png')}></Image>
               </View>
           </View>
       </View>
       {/* Data */}
       <View style={profileStyles.dataSection}>
           <Text style={profileStyles.dataSection__title}>Hola</Text>
           <View style={profileStyles.dataSection__edit}>
           <Text style={profileStyles.dataSection__title2}>@username! 🙌🏽</Text>
           <Image style={profileStyles.dataSection__img} source={require('../img/edit.png')}></Image>
           </View>
       </View>
       {/* Main Container */}
       <View style={profileStyles.main}>
        <Text style={profileStyles.main__title}>Recompensas:</Text>
        <View style={profileStyles.main__mainCard}>
            <View style={profileStyles.mainCard_leftBlock}>
                <Text style={profileStyles.mainCard__h1}>300</Text>
                <Text style={profileStyles.mainCard__h2}>mental stars</Text>
            </View>
            <View style={profileStyles.mainCard_rightBlock}>
                <Image style={profileStyles.mainCard__img} source={require('../img/star.png')}></Image> 
                <Image style={profileStyles.mainCard__img} source={require('../img/star.png')}></Image> 
                <Image style={profileStyles.mainCard__img} source={require('../img/full-star.png')}></Image> 
            </View>
        </View>
            <View style={profileStyles.main__challenges}>
                <ChallengeCard body={'Saca la Basura'}></ChallengeCard>
                <ChallengeCard body={'Corre 15 mins'}></ChallengeCard>
                <ChallengeCard body={'Baila en el espejo'}></ChallengeCard>
                <ChallengeCard body={'Sonries 10 veces'}></ChallengeCard>
                <ChallengeCard body={'Medita 5 mins'}></ChallengeCard>
                <ChallengeCard body={'Silba bonito'}></ChallengeCard>
            </View>
        </View>
        <BarMenu></BarMenu>
    </View>
)};

const profileStyles = StyleSheet.create({
    container: {
    flex:1,
    flexDirection:'column',
    backgroundColor:"#0A0B3E",
    },
//   Header
    header:{
    flex:1.7,
    flexDirection:'row',
    paddingTop: .3,
    paddingLeft:20,
    paddingRight:20,
    },

    header__leftBlock:{
    flex:1,
    paddingTop:30,
    },

    leftBlock__img:{
    borderRadius:50,
    height:67,
    width:67,
    backgroundColor:'black',
    borderWidth:3,
    borderColor:'#64FCD9',
    },

    header__rightBlock:{
    flex:1,
    // backgroundColor:'yellow',
    flexDirection:'row',
    },

    rightBlock__texts:{
    justifyContent:'center',
    alignItems:'flex-end',
    paddingRight:20,
    paddingTop:30,
    flex:1.5,
    },

    texts__text:{
    color:'#fff',
    },

    texts__text_bold:{
    color:'#fff',
    fontWeight:'bold',
    },

    rightBlock__imgContainer:{
        justifyContent:'center',
        flex:.5,
        paddingTop:30,
    },

    rightBlock__img:{
    height:20,
    width:20,
    },

//   Data Section
    dataSection:{
        flex:1.7,
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
    },

    dataSection__title:{
        color:'#FFF',
        fontSize:25,
        fontWeight: "bold",
        marginTop:5,
    },
    dataSection__title2:{
        color:'#FFF',
        fontSize:25,
        fontWeight: "bold",
    },

    dataSection__edit:{
        flexDirection:'row',
        alignItems:'center',
    },

    dataSection__img:{
        height:20,
        width:20,
        marginTop:4,
        marginLeft: 30,
    },
//   Main Styles
    main:{
        flex:5.7,
        backgroundColor:'#FFF',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
    },
    main__title:{
        fontSize:15,
        color:'#0A0B3E',
        fontWeight:'bold',
    },
    main__mainCard:{
        marginTop:10,
        height:50,
        flexDirection:'row',
        backgroundColor:'#fff',
        paddingLeft:15,
        paddingRight:15,
        borderRadius:6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    mainCard_leftBlock:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    mainCard_rightBlock:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    mainCard__h1:{
        fontSize:22,
        fontWeight:'bold',
        color:'#0A0B3E',
        marginRight:8,
    },
    mainCard__h2:{
        fontWeight:'bold',
        color:'#0A0B3E',
        marginTop:4,
    },
    mainCard__img:{
        height:25,
        width:25,
        marginRight:4,
    },
    main__challenges:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingTop:10,
    },
    
});
