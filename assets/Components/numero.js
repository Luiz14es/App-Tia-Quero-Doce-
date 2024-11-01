import { WHATSAPP_PHONE } from "@env";
import { Linking } from 'react-native';

export const abrirWhatsAppIcone = () => {
    let telefone = WHATSAPP_PHONE;
    let mensagem = "Olá, vi seus doces e fiquei interessado, gostaria de um doce.";
    const url = `whatsapp://send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    Linking.openURL(url)
      .catch(() => alert("O WhatsApp não está instalado"));
};

export const abrirWhatsApp = (item) => {
    let telefone = WHATSAPP_PHONE;
    let mensagem = `Olá, tenho interesse no ${item.nome} (${item.descricao}).`;
    const url = `whatsapp://send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    Linking.openURL(url)
        .catch(() => alert("O WhatsApp não está instalado"));
};
