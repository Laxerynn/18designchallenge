import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const navigation = useNavigation();

    const onChange = (name, value) => {
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'password2') {
            setPassword2(value);
        }
    };

    const onSubmit = async () => {
        if (password !== password2) {
            alert('Passwords do not match');
        } else {
            console.log('Register pending...');
            // You can navigate to the login page here
            navigation.navigate(Login);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    name="name"
                    value={name}
                    onChangeText={(value) => onChange('name', value)}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    name="email"
                    value={email}
                    onChangeText={(value) => onChange('email', value)}
                    placeholder="Email Address"
                />
                <TextInput
                    style={styles.input}
                    name="password"
                    value={password}
                    onChangeText={(value) => onChange('password', value)}
                    placeholder="Password"
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    name="password2"
                    value={password2}
                    onChangeText={(value) => onChange('password2', value)}
                    placeholder="Confirm Password"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(Login)}>
                    <Text style={styles.linkText}>Already have an account? Login here</Text>
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
        marginBottom: 10,
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

export default Register;
