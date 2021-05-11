import React, { useState, Component, useEffect } from 'react';
import Firebase from "../../config/firebase";
import { View, Text } from 'react-native'
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function Graficas({ navigation }) {

    const [email, setEmail] = useState("")
    const [graphdata, setGraph] = useState([])

    let ActiveUser = Firebase.auth().currentUser
    let date = new Date()
    let day = 1
    let month = date.getMonth() + 1
    let Year = date.getFullYear()
    let loadData = []

    const screenWidth = Dimensions.get("window").width;

    useEffect(function () {


        LoadData()

    }, [])



    Firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setEmail(user.email)
            ActiveUser = Firebase.auth().currentUser;

        } else {
            // No user is signed in.
        }
    });

    function LoadData() {

        console.log(ActiveUser.uid)

        let data = Firebase.firestore().collection('Formularios').doc(ActiveUser.uid)
        data.get().then((doc) => {

            if (doc.exists) {

                do {



                    var data = doc.data()['Questions--' + day + "--" + month + "--" + Year + "--Array"]
                    if (data != undefined) {

                        var info = {
                            date: data[5],
                            count: data[4]
                        }



                        loadData.push(info)
                        setGraph(loadData)
                    }
                    day += 1
                }
                while (day < 31)

                console.log(graphdata)

            }
            else {
                console.log("no Document")
            }


        }).catch((error) => {
            console.log(error)
        })
    }

    return (

        <View >

            <Text>{graphdata.date}</Text>
            <Text>Hi</Text>

        </View>
    )


}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};