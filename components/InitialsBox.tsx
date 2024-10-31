import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import { whiteLessTransparent } from "@/constants/Colors";

export const InitialsBox = ({
    colors, initials
}:{
    colors: string[],
    initials?: string
}) => {
    return (
        <LinearGradient colors={colors} style={styles.targetInitialsContainer}>
            <Text style={styles.initialsText}>{initials}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    targetInitialsContainer: {
        width: 30,
        height: 25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    initialsText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: whiteLessTransparent
    },
})