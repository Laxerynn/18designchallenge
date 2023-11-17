import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const index = () => {
    const navigation = useNavigation();

    const onLogoutPressed = () => {
        console.warn('Sign out button pressed');
    
        //validate
        navigation.navigate('SignIn');
    };

    return (
        <View>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>

            <CustomButton
                text="Sign Out"
                onPress={onLogoutPressed}
            />
        </View>
    )
}

export default index