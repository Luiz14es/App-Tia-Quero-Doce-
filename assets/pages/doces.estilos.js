import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fef7da',
    },
    title: {
      fontSize: 20,
      color: '#ff6c50',
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'Lobster',
    },
    card: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 5,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      alignItems: "center",
      width: "90%",
      marginLeft: 5,
    },
    imagem: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    info: {
      marginLeft: 5,
      flexShrink: 1,
    },
    nome: {
      fontSize: 20,
      fontWeight: "800",
      marginBottom: 5,
      fontFamily: 'Lobster',
    },
    descricao: {
      fontSize: 14,
      flexWrap: "wrap",
      fontFamily: 'Lobster',
    }
  });
  