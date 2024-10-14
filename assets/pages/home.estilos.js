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
      height: 300,
      width: 300,
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
      marginBottom: 18
    },
    texto: {
      color: "#ff6c50",
      fontSize: 18,
      fontFamily: 'Roboto'
    },
    view2: {
      margin: 24,
      alignSelf: 'stretch',
      alignItems: 'center'
    }
  });