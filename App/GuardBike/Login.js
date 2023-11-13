import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Register from './Register';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation(); // Add this line

    const onChangeEmail = (value) => {
        setEmail(value);
    };

    const onChangePassword = (value) => {
        setPassword(value);
    };

    const onLogin = async () => {
        console.log('Logging in...');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Email Address"
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={onLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.linkText}>Don't have an account yet? Click here to Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    input: {
        width: '100%',
        height: 44,
        padding: 10,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        width: '100%',
        height: 44,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    linkText: {
        color: 'blue',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default Login;
