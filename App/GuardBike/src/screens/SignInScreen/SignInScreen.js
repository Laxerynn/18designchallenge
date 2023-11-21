import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const apiUrl = 'http://145.93.176.201:3000/login';

    const onSignInPressed = async () => {
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
                    navigation.navigate('QRCodeScreen', { id: result.customer._id });
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

    const onForgotPasswordPressed = () => {
        console.warn('Forgot password button pressed');

        navigation.navigate('ForgotPassword');
    };

    const onSignUpPressed = () => {
        console.warn('Sign up button pressed');

        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo , {height: height * 0.3}]} 
                resizeMode='contain'
            />

            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}
            />

            <CustomInput
                placeholder="password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry
            />

            <CustomButton
                text="Sign In"
                onPress={onSignInPressed}
            />

            <CustomButton
                text="Forgot password?"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
            />

            <CustomButton
                text="Don't have an account? Sign Up"
                onPress={onSignUpPressed}
                type="TERTIARY"
            />
        </View>
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
    }
});

export default SignInScreen;