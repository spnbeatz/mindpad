import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ComingEvent = () => {

    const icons = ["checkbox", "attach", "chatbox-ellipses", "location", "image"] as const;
    const indicators = ['blue', 'green', 'yellow'];

    return (
        <View style={styles.container}>            
            
            <View style={[styles.between, { width: '100%', alignItems: 'flex-start'}]}>
                <Text style={styles.contentText}>Do a homework!</Text>
                <View style={[styles.between, { gap: 5}]}>
                    <Text style={styles.date}>Today 21:00</Text>
                    <Ionicons name="alarm-outline" color={"black"} size={16}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
        borderColor: '#000',
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 3
    },
    between: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: '700',
    },
    date: {
        fontSize: 14,
        color: 'black',
        fontWeight: '700'
    },
    contentText: {
        fontSize: 16,
        color: 'black',
        width: '70%'
    },
    indicator: {
        width: 20,
        height: 6,
        borderRadius: 4
    }
})