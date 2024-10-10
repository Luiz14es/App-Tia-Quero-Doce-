import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { data } from '../Components/doceList';

import { styles } from './doces.estilos';

export default function Doces() {
  const renderItem = ({item}) => {
    return(
    <View style={styles.card}>
      <Image source={item.image} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
    </View>
    )
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Veja nossos doces!</Text>
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
    </View>
  )
}

