import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSendPressed = () => {
        console.warn('Send button pressed');
        navigation.navigate('HomeScreen');
    };

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

                <Text style={styles.title}>Voer het nieuwe wachtwoord in</Text>

                <CustomInput 
                    placeholder="Code van de email"
                    value={code} 
                    setValue={setCode}
                />

                <CustomInput
                    placeholder="Wachtwoord" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton
                    text="Send"
                    onPress={onSendPressed}
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

export default NewPasswordScreen;
