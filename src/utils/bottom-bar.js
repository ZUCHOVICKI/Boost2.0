import React from 'react'
import { StyleSheet, View, Image,} from 'react-native';

export default function BarMenu({ navigation }) {
    return (
        <View style={Styles.bar}>
            <View style={Styles.bar__imgContainer}>
                <Image style={Styles.bar__img} source={require('../img/WorkflowTeamwork.png')}></Image> 
            </View>

            <View style={Styles.bar__imgContainer}>
                <Image style={Styles.bar__img} source={require('../img/WorkflowTeamwork.png')}></Image>
            </View>

            <View style={Styles.bar__imgContainer}>
                <Image style={Styles.bar__img} source={require('../img/WorkflowTeamwork.png')}></Image>
            </View>
        </View>  
)}

const Styles = StyleSheet.create({
// Bar
bar:{
    flex:.9,
    flexDirection:'row',
    backgroundColor:'#fff',
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    paddingLeft:40,
    paddingRight:40,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
},
bar__imgContainer:{
    flex:.33,
    alignItems:'center',
    justifyContent:'center',
},    
bar__img:{
    height:25,
    width:25,
},
});
