import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useNavigation();
    const { height } = useWindowDimensions();

    const onConfirmPressed = () => {
        console.warn('Register button pressed');
        navigation.navigate('HomeScreen');
    };

    const onResendPressed = () => {
        console.warn('Resend code pressed');
    }

    const onSignInPressed = () => {
        console.warn('Back to sign in pressed');

        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo , {height: height * 0.3}]} 
                    resizeMode='contain'
                />

                <Text style={styles.title}>Bevesten het aanmelden met een code via je E-mailadres</Text>

                <CustomInput 
                    placeholder="E-mailadres"
                    value={email} 
                    setValue={setEmail}
                />

                <CustomInput 
                    placeholder="Enter your confirmation code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomButton
                    text="Register"
                    onPress={onConfirmPressed}
                />

                <CustomButton
                    text="Resend code"
                    onPress={onResendPressed}
                    type="SECONDARY"
                />

                <CustomButton
                    text="Back to Sign in"
                    onPress={onSignInPressed}
                    type="TERTIARY"
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

export default ConfirmEmailScreen;
