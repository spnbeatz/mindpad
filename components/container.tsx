import React from "react"
import { View, StyleSheet, Image } from "react-native";
import { BlurView } from 'expo-blur';
import { LinearGradient } from "expo-linear-gradient";


export const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <LinearGradient style={styles.container} colors={['#021026', '#2b0d63']}>

            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center'
    },
    backgroundWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    background: {
        width: '100%',
        height: '100%'
    }
})