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
      margin: 20,
      color: "#ff6c50",
      fontSize: 25,
      fontFamily: 'Lobster',  
    },
    logo: {
      height: 280,
      width: 280,
      marginBottom: 20,
      resizeMode: "contain"
    }, 
    infoConfeiteira: {
        flex: 1,
        alignItems: "flex-start",
        flexDirection: "column",
        margin: 10
    },
    title2: {
      fontFamily: "Lobster",
      fontSize: 23,
      color: "#ff6c50",
      marginBottom: 18
    },
    texto: {
      color: "#ff6c50",
      fontFamily: "Lobster",
      fontSize: 18
    }
    ,cardAnimado: {
      width: "85%",
      height: 400,
      backgroundColor: "#fff",
      borderRadius: 10,
      alignItems: "flex-start"
    },
    cardHome: {
      flex: 1,
    },
    boloCard: {
      height: 50,
      width: 50,
    },
    link: {
      color: "#ff6c50",
      fontFamily: "Lobster",
      fontSize: 18
    }
  });