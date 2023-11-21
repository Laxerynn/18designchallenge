import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[styles.container, styles[`container_${type}`]]} >
            <Text style={[styles.text, styles[`text_${type}`] ]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY : {
        backgroundColor: '#3B71F3',
    },
    container_SECONDARY : {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },
    container_OPEN : {
        backgroundColor: 'green',
    },
    container_CLOSE : {
        backgroundColor: 'red',
    },
    container_TERTIARY : { },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_SECONDARY : {
        color: '#3B71F3',
    },
    text_TERTIARY: {
        color: 'grey',
    }
});

export default CustomButton;