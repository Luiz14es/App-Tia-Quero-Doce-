import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, Easing, ScrollView, StatusBar } from 'react-native';
import { styles } from './home.estilos';
import Icons from '../Components/Icons';


export default function HomeScreen() {

    const texto = "Tia Quero Doce é sinônimo de sabor e carinho. Diretamente da zona norte do Rio de Janeiro, nossa confeiteira começou com uma paixão por doces caseiros, conquistando o paladar de quem provava suas criações. Com uma tradição que une afeto e dedicação, ela traz à mesa doces que são mais que sobremesas, são memórias doces que ficam para sempre.";
    const linhas = texto.split(",");
  
    const texto2 = "Os pedidos são feitos sob encomenda, permitindo que os clientes escolham os sabores, aparência e temas que mais os agradam. A confeiteira trabalha com dedicação para atender a cada cliente conforme a demanda. Assim, cada doce é produzido com carinho, utilizando ingredientes frescos e de qualidade. De uma olhada no nosso Facebook ou entre em contato diretamente pelo WhatsApp";
    const linhas2 = texto2.split(".");
  
    const slideAnim = useRef(new Animated.Value(300)).current;
  
    useEffect(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true
        })
      ]).start();
    }, [slideAnim]);
  
  
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <View style={styles.container}>
          <StatusBar backgroundColor={"#ff6c50"} barStyle="light-content" />
          <Animated.View style={[styles.containerAnimado, { transform: [{ translateY: slideAnim }] }]}>
            <Text style={styles.title}>Tia Quero Doce!</Text>
            <Image
              source={require("../img/ConfeiteiraIlustracao.png")}
              style={styles.logo} />
  
            <View style={styles.infoConfeiteira}>
              <Text style={styles.title2}>Conheça nossa confeiteira</Text>
              {linhas.map((linha, index) => (
                <Text key={index} style={[styles.texto, { marginLeft: (index % 2 === 0) ? 10 : 50 }]}>
                  {linha.trim() + (index < linhas.length - 1 ? "," : ".")}
                </Text>
              ))}
            </View>
            <View style={styles.infoNegocio}>
              <Text style={styles.negocioTitle}>Como funciona</Text>
              {linhas2.map((linha, index) => (
                <Text key={index} style={[styles.texto, {marginLeft: (index % 2 === 0) ? 10 : 50}]}>
                  {linha.trim() + (index < linhas2.length - 1 ? "." : ",")}
                </Text>
              ))}
            </View>
            <Icons />
          </Animated.View>
        </View>
      </ScrollView>
    );
  }