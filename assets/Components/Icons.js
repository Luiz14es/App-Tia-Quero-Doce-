import React from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../pages/home.estilos";


const abrirFacebook = () => {
        Linking.openURL("https://www.facebook.com/share/fVr6xyh5SEoH7t65/?mibextid=qi2Omg");
};


const abrirWhatsApp = () => {
    let telefone = "+5521995040236";
    let mensagem = "Aqui vai uma mensagem de teste";
    Linking.openURL(`whatsapp://send?phone=${telefone}&text=${mensagem}`);

}

export default function Icons(){
    return(
        <View style={styles.viewIcons}>
            <TouchableOpacity onPress={abrirFacebook} style={styles.icones}>
                <Icon name="logo-facebook" size={50} color="#ff6c50" />
            </TouchableOpacity>

            <TouchableOpacity onPress={abrirWhatsApp} style={styles.icones}>
                <Icon name="logo-whatsapp" size={50} color="#ff6c50"/>
            </TouchableOpacity>
        </View>
    )
}