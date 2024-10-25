import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { primary } from "@/constants/Colors";

export const ProgressBar = (
    {
        progress,
        width=100
    }: 
    {
        progress: number | undefined,
        width?: number
    }) => {
    return (
        <View style={[styles.container, {width: `${width}%`}]}>
            {progress ? (
                <>
                    <View 
                        style={{
                            ...styles.progressBarContainer, 
                        }}
                    >
                        <View style={[styles.progress, { width: progress ? `${progress}%`: null}]}>

                        </View>
                    </View>
                    <Text style={styles.percent}>{`${progress}%`}</Text>
                </>

            ): (
                <View style={styles.noProgressContainer}>
                    <Ionicons name="sad" size={15} color="darkorange"/>
                    <Text style={styles.noProgress}>nothing to do yet...</Text>
                </View>
                
            )}

        </View>

    )
}


const styles = StyleSheet.create({
    progressBarContainer: {
        position: 'relative',
        height: 10,
        borderRadius: 5,
        borderWidth: 0.3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'white',
        width: '75%'
    },
    progress: {
        height: '100%',
        backgroundColor: primary,
        borderRadius: 5
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    percent: {

    },
    noProgress: {
        fontSize: 13,
        color: 'black',
    },
    noProgressContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 8,
        alignItems: 'center',
        flexDirection: 'row'
    }
})