import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PanelTitle } from "../PanelTitle";
import { PanelCard } from "../PanelCard";

export const ComingEvent = () => {

    return (
        <PanelCard>            
            <PanelTitle title="Coming Event" infoText="Here you can see an upcoming event." />
            <View style={[styles.between, styles.comingEvent, { width: '100%', alignItems: 'flex-start'}]}>
                <Text style={styles.contentText}>Do a homework!</Text>
                <View style={[styles.between, { gap: 5}]}>
                    <Text style={styles.date}>Today 21:00</Text>
                    <Ionicons name="alarm-outline" color={"black"} size={16}/>
                </View>

            </View>
        </PanelCard>
    )
}

const styles = StyleSheet.create({
    between: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    comingEvent: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: 'black',
        backgroundColor: 'orange'
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