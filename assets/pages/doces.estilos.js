import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fef7da',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lobster',  
    margin: 24,
    color: "#ff6c50",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 24,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  imagem: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    marginBottom: 5,
  },
  descricao: {
    fontSize: 18,
    color: "#666",
    fontFamily: 'Roboto'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
    fontFamily: 'Roboto',
  },
  modalImage: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: "#666",
    fontFamily: 'Roboto'
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: "#666",
    fontFamily: 'Roboto'
  },
  whatsappBotao: {
    padding: 15,
    margin: 15,
    borderRadius: 10, 
    backgroundColor: "#ff6c50"
  },
  whatsappBotaoTexto: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
});
