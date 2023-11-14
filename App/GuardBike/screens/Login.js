import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import QRScanner from './Qrscanner';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const apiUrl = 'http://192.168.223.16:3000/login';

    const handleLogin = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log('Response Status:', response.status);

            if (response.ok) {
                const result = await response.json();
                if (result.status == "SUCESS")
                {
                    navigation.navigate('QR-Scanner', { email: result.customer.email  });
                }
            } else {
                const errorMessage = await response.text();
                console.error('API Error:', errorMessage);
                alert('Inloggen mislukt. Controleer de log voor details.');
            }
        } catch (error) {
            console.error(error);
            alert('Er is een fout opgetreden bij het inloggen!' + error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="email"
                value={email}
                onChangeText={setemail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16
    }
});

export default LoginScreen;
