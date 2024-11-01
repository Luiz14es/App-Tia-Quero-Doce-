import React from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../pages/home.estilos";

import { abrirWhatsAppIcone } from "../Components/numero";

const abrirFacebook = () => {
        Linking.openURL("https://www.facebook.com/share/fVr6xyh5SEoH7t65/?mibextid=qi2Omg");
};

export default function Icons(){
    return(
        <View style={styles.viewIcons}>
            <TouchableOpacity onPress={abrirFacebook} style={styles.icones}>
                <Icon name="logo-facebook" size={52} color="#ff6c50" />
            </TouchableOpacity>

            <TouchableOpacity onPress={abrirWhatsAppIcone} style={styles.icones}>
                <Icon name="logo-whatsapp" size={51} color="#ff6c50" />
            </TouchableOpacity>
        </View>
    )
}