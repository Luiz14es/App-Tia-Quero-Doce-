import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Formulario() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça seu pedido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef7da',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
