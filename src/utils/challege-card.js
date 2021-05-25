import React from 'react'
import { StyleSheet, View, Image, Text} from 'react-native';

export default function ChallengeCard(props) {
    return (
        <View style={Styles.main__challenge}>
            <Image style={Styles.challenge__img} source={require(`../img/WorkflowTeamwork.png`)}></Image>
            <Text style={Styles.challenge__text}>{props.body}</Text>
    </View>
)}

const Styles = StyleSheet.create({
main__challenge:{
    minWidth:'48%',
    width:'48%',
    marginRight:'1%',
    marginLeft:'1%',
    flexDirection:'row',
    alignItems:'center',
    marginTop:12,
    paddingLeft:6,
    height: 60,
    backgroundColor:'#fff',
    borderRadius:6,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
challenge__img:{
    height:47,
    width:47,
    borderRadius:6,
},
challenge__text:{
    color:'#0A0B3E',
    fontWeight:'bold',
    marginLeft:8,
    flexShrink:1,
}
});
