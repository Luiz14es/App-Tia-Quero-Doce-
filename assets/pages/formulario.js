import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, TextInput, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BotaoEnviar from "../Components/botaoEnviar";

import { styles } from "./formulario.estilos";

const options = {
  doceEscolhido: [
    { label: "Bolo", value: "bolo" },
    { label: "Cupcake", value: "cupcake" },
    { label: "Ovo de Chocolate", value: "ovoDeChocolate" },
    { label: "Barca de doces", value: "barca" },
    { label: "Outro", value: "outroDoce" },
  ],
  numeroPessoas: [
    { label: "bolo de 15 cm (10 pessoas)", value: "10" },
    { label: "bolo de 20 cm (20 pessoas)", value: "20" },
    { label: "bolo de 25 cm (30 pessoas)", value: "30" },
    { label: "bolo de 30 cm (40 pessoas)", value: "40" },
  ],
  massaBolo: [
    { label: "Massa branca", value: "massaBranca" },
    { label: "Massa de chocolate", value: "massaDeChocolate" },
    { label: "Massa de brigadeiro", value: "massaDeBrigadeiro" },
  ],
  unidades: [
    { label: "6 unidades de cupcake", value: "6" },
    { label: "12 unidades de cupcake", value: "12" },
    { label: "18 unidades de cupcake", value: "18" },
    { label: "24 unidades de cupcake", value: "24" },
  ],
  recheio: [
    { label: "Brigadeiro", value: "brigadeiro" },
    { label: "Beijinho", value: "beijinho" },
    { label: "Doce de leite", value: "doce de leite" },
    { label: "Nutella", value: "nutella" },
    { label: "Creme de Baunilha", value: "Creme de Baunilha" },
  ],
  cobertura: [
    { label: "Chantilly", value: "Chantilly" },
    { label: "Ganache de Chocolate", value: "Ganache de Chocolate" },
    { label: "Pasta Americana", value: "Pasta Americana" },
    { label: "Glacê", value: "Glacê" },
    { label: "Confeitos coloridos", value: "Confeitos coloridos" },
  ],
  decoracao: [
    { label: "Top de Aniversário", value: "Top de Aniversário" },
    { label: "Tema infantil", value: "Tema infantil" },
    { label: "Decoração com Guloseimas", value: "Decoração com Guloseimas" },
    { label: "Outro", value: "outra decoração" },
  ],
};

export default function Formulario() {
  const [formData, setFormData] = useState({
    doceEscolhido: "",
    docePersonalizado: "",
    numeroPessoas: "",
    massaBolo: "",
    unidades: "",
    recheio: "",
    cobertura: "",
    decoracao: "",
    decoracaoPersonalizada: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const carregarDados = async () => {
    try {
      const dados = await AsyncStorage.getItem("@pedido_doce");
      if (dados) setFormData(JSON.parse(dados));
    } catch (e) {
      console.log("Erro ", e);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const salvarDados = async () => {
    try {
      await AsyncStorage.setItem("@pedido_doce", JSON.stringify(formData));
    } catch (e) {
      console.log("Erro", e);
    }
  };

  useEffect(() => {
    salvarDados();
  }, [formData]);

  const renderPicker = (field, options) => (
    <Picker
      selectedValue={formData[field]}
      onValueChange={(value) => handleChange(field, value)}
      style={styles.picker}
    >
      {options.map(({ label, value }) => (
        <Picker.Item
          key={value}
          label={label}
          value={value}
          style={styles.item}
        />
      ))}
    </Picker>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Faça seu pedido</Text>

        <View style={styles.form}>
          <Text style={styles.title2}>Escolha o doce que deseja</Text>
          {renderPicker("doceEscolhido", options.doceEscolhido)}

          {formData.doceEscolhido === "outroDoce" && (
            <TextInput
              placeholder="Informe o doce que deseja"
              value={formData.docePersonalizado}
              onChangeText={(text) => handleChange("docePersonalizado", text)}
              style={styles.TextInput}
            />
          )}

          {formData.doceEscolhido === "bolo" && (
            <>
              {renderPicker("numeroPessoas", options.numeroPessoas)}
              <Text style={styles.title2}>Infome a massa que deseja</Text>
              {renderPicker("massaBolo", options.massaBolo)}
            </>
          )}

          {formData.doceEscolhido === "cupcake" && (
            <>
              <Text style={styles.title2}>Escolha a quantidade</Text>
              {renderPicker("unidades", options.unidades)}
            </>
          )}

          {(formData.doceEscolhido === "bolo" ||
            formData.doceEscolhido === "cupcake") && (
            <>
              <Text style={styles.title2}>Infome o recheio que deseja</Text>
              {renderPicker("recheio", options.recheio)}
            </>
          )}

          <Text style={styles.title2}>Infome a cobertura que deseja</Text>
          {renderPicker("cobertura", options.cobertura)}

          <Text style={styles.title2}>Infome a decoração que deseja</Text>
          {renderPicker("decoracao", options.decoracao)}

          {formData.decoracao === "outra decoração" && (
            <TextInput
              placeholder="Informe a decoração que deseja"
              value={formData.decoracaoPersonalizada}
              onChangeText={(text) =>
                handleChange("decoracaoPersonalizada", text)
              }
              style={styles.TextInput}
            />
          )}

          <BotaoEnviar {...formData} />
        </View>
      </View>
    </ScrollView>
  );
}
