import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import logo from '../../../assets/images/logo.png';

import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onPaymentPressed = () => {
        console.warn('Payment pressed');
    }

    const onInformationPressed = () => {
        console.warn('Information pressed');
    }

    const onStatistiekenPressed = () => {
        console.warn('Statistieken pressed');
    }

    const onLogoutPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.root}>
            <Image 
                source={require('../../../assets/images/logo.png')} 
                style={[styles.logo, { height: height * 0.3 }]} 
                resizeMode='contain'
            />
            <View style={styles.buttonsContainer}>
                <CustomButton
                    text="Betalingsmogelijkheden"
                    onPress={onPaymentPressed}
                />

                <CustomButton
                    text="Persoonlijke informatie"
                    onPress={onInformationPressed}
                />

                <CustomButton
                    text="Statistieken"
                    onPress={onStatistiekenPressed}
                />
            </View>
            <View style={styles.logoutContainer}>
                <CustomButton
                    text="Log uit"
                    onPress={onLogoutPressed}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
    },
    buttonsContainer: {
        marginTop: -100,
        width: '70%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutContainer: {
        width: '70%',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
});

export default AccountScreen;