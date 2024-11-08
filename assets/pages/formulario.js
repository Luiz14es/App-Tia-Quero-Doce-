import React ,{ useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, TextInput, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BotaoEnviar from "../Components/botaoEnviar";

import { styles } from "./formulario.estilos";

export default function Formulario() {
  const [doceEscolhido, setDoceEscolhido] = useState("");
  const [docePersonalizado, setDocePersonalizado] = useState("");
  const [numeroPessoas, setNumeroPessoas] = useState("");
  const [massaBolo, setMassaBolo] = useState("");
  const [unidades, setUnidades] = useState("");
  const [recheio, setRecheio] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [decoracao, setDecoracao] = useState("");
  const [decoracaoPersonalizada, setDecoracaoPersonalizada] = useState("");


  const salvarDados = async () => {
    try {
      const dados = await AsyncStorage.getItem("@pedido_doce");
      if (dados !== null) {
        const { doceEscolhido, docePersonalizado, numeroPessoas, massaBolo, unidades, recheio, cobertura, decoracao } = JSON.parse(dados);
        setDoceEscolhido(doceEscolhido || "");
        setDocePersonalizado(docePersonalizado || "");
        setNumeroPessoas(numeroPessoas || "");
        setMassaBolo(massaBolo || "");
        setUnidades(unidades || "");
        setRecheio(recheio || "");
        setCobertura(cobertura || "");
        setDecoracao(decoracao || "");
      }}
    catch (e) {
      console.log("Erro", e);
    }
  };

  const carregarDados = async () => {
    try {
      const dados = await AsyncStorage.getItem("@pedido_doce");
      if (dados !== null) {
        const { doceEscolhido, docePersonalizado, numeroPessoas, massaBolo, unidades, recheio,  cobertura, decoracao } = JSON.parse(dados);
        setDoceEscolhido(doceEscolhido);
        setDocePersonalizado(docePersonalizado);
        setNumeroPessoas(numeroPessoas);
        setMassaBolo(massaBolo);
        setUnidades(unidades);
        setRecheio(recheio);
        setCobertura(cobertura)
        setDecoracao(decoracao);
      }
    }
    catch (e) {
      console.log("Erro ", e);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    salvarDados();

  }, [doceEscolhido, docePersonalizado, numeroPessoas, massaBolo, unidades, recheio, cobertura, decoracao]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}}>
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu pedido</Text>

      <View style={styles.form}>

        <Text style={styles.title2}>Escolha o doce que deseja</Text>
        <Picker 
          selectedValue={doceEscolhido} onValueChange={(itemValue) => setDoceEscolhido(itemValue)}
          style={styles.picker}>

            <Picker.Item label="Bolo" value="bolo" style={styles.item}/>
            <Picker.Item label="Cupcake" value="cupcake" style={styles.item}/>
            <Picker.Item label="Ovo de Chocolate" value="ovoDeChocolate" style={styles.item}/>
            <Picker.Item label="Barca de doces" value="barca" style={styles.item}/>
            <Picker.Item label="Outro" value="outroDoce" style={styles.item}/>
      
        </Picker>

        {doceEscolhido === "outroDoce" && (
                    <TextInput placeholder="Informe o doce que deseja" value={docePersonalizado} onChangeText={setDocePersonalizado} style={styles.TextInput} />
                )}

                {doceEscolhido === "bolo" && (
                    <>

                      <Picker selectedValue={numeroPessoas} onValueChange={(itemValue) => setNumeroPessoas(itemValue)} style={styles.picker}>

                        <Picker.Item label="bolo de 15 cm (10 pessoas)" value="10" style={styles.item}/>
                        <Picker.Item label="bolo de 20 cm (20 pessoas)" value="20" style={styles.item}/>
                        <Picker.Item label="bolo de 25 cm (30 pessoas)" value="30" style={styles.item}/>
                        <Picker.Item label="bolo de 30 cm (40 pessoas)" value="40" style={styles.item}/>

                      </Picker>
                      
                      <Text style={styles.title2}>Infome a massa que deseja</Text>
                      
                      <Picker selectedValue={massaBolo} onValueChange={(itemValue) => setMassaBolo(itemValue)} style={styles.picker}>

                        <Picker.Item label="Massa branca" value="massaBranca" style={styles.item}/>
                        <Picker.Item label="Massa de chocolate" value="massaDeChocolate" style={styles.item}/>
                        <Picker.Item label="Massa de brigadeiro" value="massaDeBrigadeiro" style={styles.item}/>

                      </Picker>
                    </>
                )}

                {doceEscolhido === "cupcake" && (
                  <>
                    <Picker selectedValue={unidades} onValueChange={(itemValue) => setUnidades(itemValue)} style={styles.picker}>

                      <Picker.Item label="6 unidades de cupcake" value="6" style={styles.item} />
                      <Picker.Item label="12 unidades de cupcake" value="12" style={styles.item} />
                      <Picker.Item label="18 unidades de cupcake" value="18" style={styles.item} />
                      <Picker.Item label="24 unidades de cupcake" value="24" style={styles.item} />

                    </Picker>
                  </>
                )}

                {doceEscolhido === "bolo" || doceEscolhido === "cupcake" && (
                  <>
                    <Text style={styles.title2}>Infome o recheio que deseja</Text>

                    <Picker selectedValue={recheio} onValueChange={(itemValue) => setRecheio(itemValue)} style={styles.picker}>

                      <Picker.Item label="Brigadeiro" value="brigadeiro" style={styles.item} />
                      <Picker.Item label="Beijinho" value="beijinho" style={styles.item} />
                      <Picker.Item label="Doce de leite" value="doce de leite" style={styles.item} />
                      <Picker.Item label="Nutella" value="nutella" style={styles.item} />
                      <Picker.Item label="Creme de Baunilha" value="Creme de Baunilha" style={styles.item} />

                    </Picker>
                  </>
                )}

                <Text style={styles.title2}>Infome a cobertura que deseja</Text>


                <Picker  selectedValue={cobertura} onValueChange={(itemValue) => setCobertura(itemValue)} style={styles.picker}>

                      <Picker.Item label="Chantilly" value="Chantilly" style={styles.item} />
                      <Picker.Item label="Ganache de Chocolate" value="Ganache de Chocolate" style={styles.item} />
                      <Picker.Item label="Pasta Americana" value="Pasta Americana" style={styles.item} />
                      <Picker.Item label="Glacê" value="Glacê" style={styles.item} />
                      <Picker.Item label="Confeitos coloridos" value="Confeitos coloridos" style={styles.item} />

                </Picker>

                <Text style={styles.title2}>Infome a decoração que deseja</Text>

                <Picker selectedValue={decoracao} onValueChange={(itemValue) => setDecoracao(itemValue)} style={styles.picker}>

                      <Picker.Item label="Top de Aniversário" value="Top de Aniversário" style={styles.item} />
                      <Picker.Item label="Tema infantil" value="Tema infantil" style={styles.item} />
                      <Picker.Item label="Decoração com Guloseimas" value="Decoração com Guloseimas" style={styles.item} />
                      <Picker.Item label="Outro" value="outra decoração" style={styles.item}/>
                </Picker>

                {decoracao === "outra decoração" && (
                    <TextInput 
                      placeholder="Informe a decoração que deseja" 
                      value={decoracaoPersonalizada} 
                      onChangeText={setDecoracaoPersonalizada} 
                      style={styles.TextInput} 
                    />
                  )}

                <BotaoEnviar
                  doceEscolhido={doceEscolhido}
                  docePersonalizado={docePersonalizado}
                  numeroPessoas={numeroPessoas}
                  massaBolo={massaBolo}
                  unidades={unidades}
                  recheio={recheio}
                  decoracao={decoracao}
                  cobertura={cobertura}
                />

      </View>
    </View>
    </ScrollView>
  );
}




