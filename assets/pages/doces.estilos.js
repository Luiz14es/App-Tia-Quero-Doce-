import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fef7da',
    },
    title: {
      fontSize: 25,
      color: '#ff6c50',
      margin: 20,
      textAlign: 'center',
      fontFamily: 'Lobster',
    },
    card: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      alignItems: "center",
      width: "90%",
    },
    imagem: {
      width: 100,
      height: "100%",
      borderRadius: 10,
      marginRight: 10
    },
    info: {
      marginLeft: 5,
      flexShrink: 1,
    },
    nome: {
      fontSize: 22,
      marginBottom: 5,
      fontFamily: 'Lobster',
    },
    descricao: {
      fontSize: 18,
      flexWrap: "wrap",
      fontFamily: 'Lobster',
    }
  });
  