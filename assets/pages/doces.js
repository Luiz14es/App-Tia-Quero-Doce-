import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity, Button } from 'react-native';
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
      <Text style={styles.title}>Veja nossos doces!</Text>
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
              <Text style={styles.modalPrice}>Preço: R$50</Text>
              <Text style={styles.modalServing}>Serve: 10 pessoas</Text>
              <Button title="Fechar" onPress={closeModal} />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}
