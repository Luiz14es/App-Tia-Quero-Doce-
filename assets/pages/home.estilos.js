import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fef7da',
    },
    title: {
      marginTop: 5,
      color: "#ff6c50",
      fontSize: 20,
      fontFamily: 'Lobster',  
    },
    logo: {
      height: 150,
      width: 150,
      marginBottom: 5
    }, 
    infoConfeiteira: {
        flex: 1,
        alignItems: "center",
        width: "90%"
    },
    title2: {
      fontFamily: "Lobster",
      fontSize: 18,
      color: "#ff6c50",
      marginBottom:10
    },
    secaoTexto1: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginLeft: 5
    },
    confeiteiraIlustracao1: {
      height: 150,
      width: 150,
      resizeMode: "contain",
    },
    divTexto: {
      flexShrink: 1
    },
    texto: {
      color: "#ff6c50",
      fontFamily: "Lobster",
    }
  });