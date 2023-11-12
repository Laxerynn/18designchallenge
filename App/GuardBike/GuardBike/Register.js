import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onChange = e => {
        const { name, value } = e.target;
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

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match');
        } else {
            // Register logic here
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
                    onChangeText={value => setName(value)}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    name="email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                    placeholder="Email Address"
                />
                <TextInput
                    style={styles.input}
                    name="password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    placeholder="Password"
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    name="password2"
                    value={password2}
                    onChangeText={value => setPassword2(value)}
                    placeholder="Confirm Password"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Register</Text>
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
});

export default Register;