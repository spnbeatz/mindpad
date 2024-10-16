import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

interface SubmitButton {
    onPress?: () => void;
    isSwitch: boolean;
    type: 'register' | 'login';
}

export const AuthBtn: React.FC<SubmitButton> = ({ onPress, isSwitch, type }) => {

    const buttonText = (textType: 'register' | 'login') => {
        switch (textType) {
            case 'register':
                return 'Register';
            case 'login':
                return 'Login';
            default:
                return '';
        }
    };

    return (
        <TouchableOpacity onPress={onPress} style={[styles.btnMainStyle, isSwitch ? styles.buttonSwitcher : styles.buttonSubmit]}>
            <Text style={isSwitch ? styles.textSwitcher : styles.text}>{buttonText(type)}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnMainStyle: {
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        
    },
    buttonSubmit: {
        backgroundColor: 'orange',
        marginTop: 20
    },
    buttonSwitcher: {
        borderColor: '#888',
        borderWidth: 1
    },
    text: {
        color: 'white',
        fontWeight: '500'
    },
    textSwitcher: {
        color: '#888',
        fontWeight: '500'
    }
});
