import React from "react"
import { View, StyleSheet, Image } from "react-native";
import Background from '@/assets/images/background.png';
import { BlurView } from 'expo-blur';


export const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <View style={styles.container}>
            <BlurView intensity={100} style={styles.backgroundWrapper}>
                <Image source={Background} style={styles.background}/>
            </BlurView>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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