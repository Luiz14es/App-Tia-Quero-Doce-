import React, {useEffect, useRef} from 'react';
import { View, Text, Image, Animated, Easing, Linking, TouchableOpacity,ScrollView } from 'react-native';
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

function HomeScreen() {

  const texto = "Tia Quero Doce é sinônimo de sabor e carinho. Diretamente de Madureira, nossa confeiteira começou com uma paixão por doces caseiros, conquistando o paladar de quem provava suas criações. Com uma tradição que une afeto e dedicação, ela traz à mesa doces que são mais que sobremesas, são memórias doces que ficam para sempre.";
  const linhas = texto.split(",");

  const slideAnim = useRef(new Animated.Value(300)).current;
  const cardAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 2000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }),
      Animated.timing(cardAnim, {
        toValue: 0,
        duration: 2000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      })
    ]).start();
  }, [slideAnim, cardAnim]);

  const abrirFacebook = () => {
    Linking.openURL("https://www.facebook.com/share/fVr6xyh5SEoH7t65/?mibextid=qi2Omg");
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.containerAnimado, { transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.title}>Tia Quero Doce!</Text>
        <Image
          source={require("../tiaQueroDoce/assets/img/ConfeiteiraIlustracao.png")}
          style={styles.logo} />

        <View style={styles.infoConfeiteira}>
          <Text style={styles.title2}>Conheça nossa confeiteira</Text>
          {linhas.map((linha, index) => (
            <Text key={index} style={[styles.texto, { marginLeft: (index % 2 === 0) ? 10 : 50 }]}>
              {linha.trim() + (index < linhas.length - 1 ? "," : ".")}
            </Text>
          ))}
        </View>
      </Animated.View>

      <Animated.View style={[styles.cardAnimado, { transform: [{translateX: cardAnim}]}]}>
          <View style={styles.cardHome}>
            <Image
             source={require("./assets/img/BoloDeChocolateBrancoEtTopoAzul.jpeg")}
             style={styles.boloCard}/>
            <TouchableOpacity onPress={abrirFacebook}>
              <Text style={styles.link}>Visite o facebook da Tia!</Text>
            </TouchableOpacity>
          </View>
      </Animated.View>
    </View>
  );
}

///Tia Quero Doce é sinônimo de sabor e carinho. Diretamente de Madureira, nossa confeiteira começou com uma paixão por doces caseiros, conquistando o paladar de quem provava suas criações. Com uma tradição que une afeto e dedicação, ela traz à mesa doces que são mais que sobremesas, são memórias doces que ficam para sempre.
