import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font'; 
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Doces from './assets/pages/doces';
import Formulario from './assets/pages/formulario';

import { styles } from './assets/pages/home.estilos';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
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

  const texto = "Tia Quero Doce é sinônimo de sabor e carinho. Diretamente de Madureira, nossa confeiteira começou com uma paixão por doces caseiros, conquistando o paladar de quem provava suas criações. Com uma tradição que une afeto e dedicação, ela traz à mesa doces que são mais que sobremesas, são memórias doces que ficam para sempre.";
  const linhas = texto.split(",");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tia Quero Doce!</Text>
      <Image
      source={require("../tiaQueroDoce/assets/img/cupcake.png")}
      style={styles.logo} />

      <View style={styles.infoConfeiteira}>
        <Text style={styles.title2}>Conheça nossa confeiteira</Text>
        <Text style={styles.nome}>Tia Quero Doce</Text>

        {linhas.map((linha, index) => (
          <Text key={index} style={[styles.texto, { marginLeft: (index % 2 === 0) ? 10 : 50 }]}>
            {linha.trim() + (index < linhas.length - 1 ? "," : "")}
          </Text>
        ))}
      </View>
    </View>
  );
}

