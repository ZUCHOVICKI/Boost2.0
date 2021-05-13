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
import { set } from 'react-native-reanimated';


export default function Graficas({ navigation }) {

    //Hooks que contienen los datos necesarios para las Graficas
    const [graphdata, setGraph] = useState([])
    const [lineGraph, setLine] = useState({
        labels: ["Empty"],
        datasets: [{
          data: [0]
        }]
      })
      //Usuario Activo en Firebase
    let ActiveUser = Firebase.auth().currentUser;

    //Variables con información de Fechas para la busqueda de formulario dentro del mes
    let date = new Date()
    let day = 1
    let month = date.getMonth() + 1
    let Year = date.getFullYear()
    //Fechas que miden la cantidad de dias de un mes para poder hacer correctamente el display en la Grafica de Contribución
    let dt = new Date()
    let fulld = new Date(dt.getFullYear(), dt.getMonth() + 1, 0) 
    let fulld2 = new Date(fulld.getFullYear(),fulld.getMonth(),fulld.getDate()-1)

      //Estructura en la que se insertan los datos de los formularios antes de ser insertadas en un Hook
    let loadData = []
    const Linedata = {
        labels: [],
        datasets: [{
          data: []
        }]
      }
    
      //Medición del width de la pantalla para poder hacer responsivas las graficas
    const screenWidth = Dimensions.get("window").width;

  
      //Realiza el cargado de los Hooks y evita que la pagina se refresque constantemente , solo se efectua una vez al cargarse la pantalla
    useEffect(function () {

        
        LoadData()
        
        
    }, [setGraph,setLine])

    
   
      
      
   //Carga los datos en los Hooks
    function LoadData() {

        
        //Obtiene los datos de Firestore usando el UID del Usuario 
        let data = Firebase.firestore().collection('Formularios').doc(ActiveUser.uid)
        data.get().then((doc) => {
            
                
            if (doc.exists) {

                do {
                   
                    //Checa mediante el nombre del archivo si existe un formulario dentro de ese dia y si existe lo carga en los hooks (solo checa del 1 - al ultimo dia del mes correspondiente)
                    var data = doc.data()['Questions--' + day + "--" + month + "--" + Year + "--Array"]
                    if (data != undefined) {

                        //Se extraen la 4 y 5 posición del arreglo ( 4=>contiene la suma del formulario 5=> Contiene la fecha)
                        var info = {
                            date: data[5],
                            count: data[4]
                        }
                        //Se insertan los datos en un Array que se carga en la Grafica de Contribución
                        loadData.push(info)



                            //Se carga los datos en una estructura para las Graficas de Barras y Lineas
                          Linedata.labels.push(data[5])
                          Linedata.datasets[0].data.push(data[4])

                        
                        
                        
                    }
                    day += 1
                }
                while (day < 31)
            
                //Se realiza el Set de los Hooks
                setGraph(loadData)
                setLine(Linedata)
               
                
                
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

            
            


            <ContributionGraph
        values={graphdata}
        endDate={new Date(fulld2)}
        numDays={fulld.getDate()}
        width={screenWidth}
        height={250}
        chartConfig={chartConfig}
        squareSize = {25}
        
        
      />

<LineChart
  
  data={lineGraph}
  width={screenWidth}
  height={250}
  chartConfig={chartConfig}
  bezier
/>
<BarChart
  
  data={lineGraph}
  width={screenWidth}
  height={250}
  chartConfig={chartConfig}
  
/>



        </View>
    )


}

const chartConfig = {
    
    backgroundGradientFrom: "#1E1E1E",
    backgroundGradientFromOpacity: .8,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: .9,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};