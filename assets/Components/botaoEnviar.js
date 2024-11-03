import React from "react";
import { TouchableOpacity, Text, Linking, StyleSheet } from "react-native";

import { WHATSAPP_PHONE } from "@env";

const BotaoEnviar = ( { doceEscolhido, docePersonalizado, numeroPessoas, massaBolo, unidades, logar, onLoginRequired }) => {
    const criarMensagem = () => {
        if(!logar){
            onLoginRequired();
            return;
        }

        let mensagem = `Olá, eu gostaria de um ${doceEscolhido}`;

        if( doceEscolhido === "outroDoce" && docePersonalizado ){
            mensagem += ` ${docePersonalizado}`;
        }

        if( doceEscolhido === "bolo" ) {
            mensagem += ` para ${numeroPessoas} pessoas com massa de ${massaBolo}`;
        }

        if( doceEscolhido === "cupcake" ) {
            mensagem += ` ${unidades} unidades de cupcake`;
        }

        const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensagem)}`;
        Linking.openURL(url).catch(err => console.log("Erro ao abrir o WhatsApp", err));
    };

    return(
        <TouchableOpacity onPress={criarMensagem} style={styles.botao}>
            <Text style={styles.textBotao}>Envie seu pedido</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#ff6c50",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10
    },
    textBotao: {
        fontFamily: "Roboto",
        color: "#fff",
        fontSize: 16
    }
})

export default BotaoEnviar;
