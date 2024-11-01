import React ,{ useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, TextInput } from 'react-native';

import { styles } from "./formulario.estilos";

export default function Formulario() {
  const [doceEscolhido, setDoceEscolhido] = useState("");
  const [docePersonalizado, setDocePersonalizado] = useState("");
  const [numeroPessoas, setNumeroPessoas] = useState("");
  const [unidades, setUnidades] = useState("");
  const [recheio, setRecheio] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu pedido</Text>

      <View style={styles.form}>

        <Picker 
          selectedValue={doceEscolhido} onValueChange={(itemValue) => setDoceEscolhido(itemValue)}
          style={styles.picker}>

            <Picker.Item label="Bolo" value="bolo" />
            <Picker.Item label="Cupcake" value="cupcake" />
            <Picker.Item label="Ovo de Chocolate" value="ovoDeChocolate" />
            <Picker.Item label="Barca de doces" value="barca" />
            <Picker.Item label="Outro" value="outroDoce" />
      
        </Picker>

        {doceEscolhido === "outroDoce" && (
                    <TextInput placeholder="Informe o doce que deseja" value={docePersonalizado} onChangeText={setDocePersonalizado} style={styles.TextInput} />
                )}

                {doceEscolhido === "bolo" && (
                    <Picker selectedValue={numeroPessoas} onValueChange={(itemValue) => setNumeroPessoas(itemValue)} style={styles.picker}>
                        <Picker.Item label="bolo de 15 cm (10 pessoas)" value="10" />
                        <Picker.Item label="bolo de 20 cm (20 pessoas)" value="20" />
                        <Picker.Item label="bolo de 25 cm (30 pessoas)" value="30" />
                        <Picker.Item label="bolo de 30 cm (40 pessoas)" value="40" />
                    </Picker>
                )}
      </View>
    </View>
  );
}



