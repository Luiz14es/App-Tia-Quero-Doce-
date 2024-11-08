import React from 'react';
import { useFonts } from 'expo-font'; 
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Doces from './assets/pages/doces';
import Formulario from './assets/pages/formulario';
import HomeScreen from './assets/pages/HomeScreen';

const Tab = createMaterialTopTabNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    "Roboto" : require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto" : require("./assets/fonts/Roboto-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#ff6c50' }, 
          tabBarLabelStyle: { color: '#fff', fontSize: 14,  fontFamily: 'Roboto',}, 
          tabBarIndicatorStyle: { backgroundColor: '#fff' }, 
        }}
      >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Doces" component={Doces} />
          <Tab.Screen name="Faça seu pedido" component={Formulario} />
        </Tab.Navigator>
      </NavigationContainer>    
  );
}

