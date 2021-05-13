import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

import Main from './src/pages/Main';
import Login from './src/pages/Login';
import Principal from './src/pages/Principal';
import Formulario from './src/pages/Formulario';
import Graficas from './src/pages/Graficas'

export default function App() {

  

  LogBox.ignoreLogs(['Setting a timer']);


  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Graficas" component={Graficas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}