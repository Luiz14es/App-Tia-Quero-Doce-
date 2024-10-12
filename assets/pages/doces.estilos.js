import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fef7da',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lobster',  
    marginBottom: 20,
    color: "#ff6c50",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    padding: 10,
  },
  imagem: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    marginBottom: 5
  },
  descricao: {
    fontSize: 18,
    color: "#666",
    fontFamily: 'Lobster',  
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
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6c50',
  },
  modalServing: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});
