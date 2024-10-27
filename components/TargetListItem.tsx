import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageSourcePropType } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { Feather } from '@expo/vector-icons';
import { whiteLessTransparent } from '@/constants/Colors';
import React from 'react';

interface ItemProps {
    id: string,
    colors: string[],
    backgroundImage: ImageSourcePropType,
    title: string,
    progress: number,
    initials: string
}

export const TargetListItem= ({item}: {item: ItemProps}) => {
    return (
        <LinearGradient style={[styles.listItemContainer]} colors={item.colors}>
            <Image source={item.backgroundImage} style={styles.backgroundImage}/>
            <View style={styles.contentContainer}>
                <Text style={styles.listItemLabel}>{item.title}</Text>
                <ProgressBar progress={item.progress} />
            </View>
            <View style={styles.targetDateContainer}>
                <Feather name="target" size={12} color={whiteLessTransparent} />
                <Text style={styles.targetDate}>31.12.2024</Text>
            </View>
            <View style={styles.daysLeftContainer}>
                <Text style={styles.daysLeftText}>122 days</Text>
            </View>
            <View style={styles.initialsBox}>
                <Text style={styles.initials}>
                    {item.initials}
                </Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.4,
        
    },
    listItemContainer: {
        width: 167,
        height: 200,
        borderRadius: 25,
        elevation: 5,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemLabel: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.9)',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 0
        
    },
    contentContainer: {
        width: '100%',
        height: '60%',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    targetDateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 15,
        top: 15,
        gap: 5
    },
    targetDate: {
        color: whiteLessTransparent,
        fontSize: 12
    },
    daysLeftContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 5
    },
    daysLeftText: {
        fontSize: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    initialsBox: {
        position: 'absolute',
        right: 15,
        top: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 5

    },
    initials: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold'
    }
})