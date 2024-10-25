import { StyleSheet, View } from "react-native";
import React from "react";

export const PanelCard = ({children}: {children: React.ReactNode}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
        borderColor: '#000',
        borderWidth: 0.3,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 2,
        gap: 20
    },
})