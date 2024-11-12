import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedIn } = useAuth();

    const handleLogin = () => {
        if (username === 'usuario' && password === 'senha') {
            setIsLoggedIn(true);
        } else {
            Alert.alert('Erro', 'Usuário ou senha incorretos');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tia Quero Doce!</Text>

            <TextInput
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fef7da',
    },
    title: {
      marginBottom: 24,
      color: "#ff6c50",
      fontSize: 50,
      fontFamily: 'Lobster',
      alignSelf: "center"  
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
        color: "#333",
        fontFamily: 'Roboto'
    },
});

export default Login;