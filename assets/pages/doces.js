import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity, Linking } from 'react-native';
import { data } from '../Components/doceList';
import { styles } from './doces.estilos';

export default function Doces() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const enviarMensagem = (item) => {
    const telefone = "+5521995040236";
    const mensagem = `Olá, tenho interesse no ${item.nome} (${item.descricao})`;
    const url = `whatsapp://send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    Linking.openURL(url).catch(() => alert("O WhatsApp não esta instalado"))
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => openModal(item)}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.imagem} />
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao} numberOfLines={2}>
              {item.descricao}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja alguns dos nossos doces!</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={closeModal}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{selectedItem.nome}</Text>
              <Image source={selectedItem.image} style={styles.modalImage} />
              <Text style={styles.modalDescription}>{selectedItem.descricao}</Text>
              <Text style={styles.modalText}>{selectedItem.preco}</Text>

              <TouchableOpacity
                style={styles.whatsappBotao}
                onPress={() => enviarMensagem(selectedItem)}
              >
                <Text style={styles.whatsappBotaoTexto}>Tenho interesse nesse doce</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}
