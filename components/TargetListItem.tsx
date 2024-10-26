import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageSourcePropType } from 'react-native';
import React from 'react';

interface ItemProps {
    id: string,
    colors: string[],
    backgroundImage: ImageSourcePropType,
    title: string
}

export const TargetListItem= ({item}: {item: ItemProps}) => {
    return (
        <LinearGradient style={[styles.listItemContainer]} colors={item.colors}>
            <Image source={item.backgroundImage} style={styles.backgroundImage}/>
            <View style={styles.contentContainer}>
                <Text style={styles.listItemLabel}>{item.title}</Text>
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
        fontSize: 18,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: 'bold',
        
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})