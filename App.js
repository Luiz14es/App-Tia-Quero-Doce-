import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font'; // Já embutido no Expo SDK 48+
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Doces from './assets/pages/doces';
import Formulario from './assets/pages/formulario';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  // Carregar a fonte Lobster
  let [fontsLoaded] = useFonts({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou pode retornar um componente de loading personalizado aqui
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#ff6c50' }, 
          tabBarLabelStyle: { color: '#fff', fontSize: 14,  fontFamily: 'Lobster',}, 
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

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tia Quero Doce!</Text>
      <Image
      source={require("../tiaQueroDoce/assets/img/cupcake.png")}
      style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fef7da',
  },
  title: {
    marginTop: 5,
    color: "#ff6c50",
    fontSize: 20,
    fontFamily: 'Lobster',  // Aplicando a fonte Lobster no título
  },
  logo: {
    height: 150,
    width: 150
  }
});
