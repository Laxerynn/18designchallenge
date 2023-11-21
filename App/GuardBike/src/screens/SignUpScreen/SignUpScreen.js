import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const apiUrl = 'http://145.93.176.201:3000/customers';

    const onRegisterPressed = async () => {
        if (password == passwordRepeat) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                console.log('Response Status:', response.status);

                if (response.ok) {
                    const result = await response.json();
                    navigation.navigate('QRCodeScreen', { id: result.customer._id });
                } else {
                    const errorMessage = await response.text();
                    console.error('API Error:', errorMessage);
                    alert('Inloggen mislukt. Controleer de log voor details.');
                }
            } catch (error) {
                console.error(error);
                alert('Er is een fout opgetreden bij het inloggen!' + error);
            }
        } else {
            alert('Wachtwoorden komen niet overeen!');
        }
    };

    const onTermsOfUsePressed = () => {
        console.warn('Terms of Use pressed');
    }

    const onPrivacyPressed = () => {
        console.warn('Privacy Policy pressed');
    }

    return (
        <ScrollView showVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo , {height: height * 0.3}]} 
                    resizeMode='contain'
                />

                <Text style={styles.title}>Create an account</Text>

                <CustomInput 
                    placeholder="name" 
                    value={name} 
                    setValue={setName}
                />

                <CustomInput 
                    placeholder="email" 
                    value={email} 
                    setValue={setEmail}
                />

                <CustomInput
                    placeholder="password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomInput
                    placeholder="Repeat Password" 
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '} 
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '} 
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>

                <CustomButton
                    text="Register"
                    onPress={onRegisterPressed}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5c5c5c',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
    }
});

export default SignUpScreen;