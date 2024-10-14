import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fef7da',
    },
    containerAnimado: {
      alignItems: "center"
    },
    title: {
      margin: 24,
      color: "#ff6c50",
      fontSize: 30,
      fontFamily: 'Lobster',  
    },
    logo: {
      height: 280,
      width: 280,
      margin: 24,
      resizeMode: "contain"
    }, 
    infoConfeiteira: {
        alignItems: "flex-start",
        flexDirection: "column",
        margin: 24
    },
    title2: {
      fontFamily: "Lobster",
      fontSize: 23,
      color: "#ff6c50",
      marginBottom: 8
    },
    texto: {
      color: "#ff6c50",
      fontSize: 18,
      fontFamily: 'Roboto'
    },
    infoNegocio: {
      alignItems: "flex-start",
      flexDirection: "column",
      margin: 24,
    },
    negocioTitle: {
      fontFamily: "Lobster",
      fontSize: 23,
      color: "#ff6c50",
      marginRight: 50
    },
    viewIcons: {
      flexDirection: "row",
      justifyContent: "center"
    },
    icones: {
      margin: 24
    }
  });