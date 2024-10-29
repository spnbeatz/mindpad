import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageSourcePropType } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { Feather } from '@expo/vector-icons';
import { whiteLessTransparent } from '@/constants/Colors';
import React from 'react';
import { useRouter } from 'expo-router';

interface ItemProps {
    id: string,
    colors: string[],
    backgroundImage: ImageSourcePropType,
    title: string,
    progress: number,
    initials: string
}

export const TargetListItem= ({item}: {item: ItemProps}) => {

    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.push('/TargetScreen')}>
            <LinearGradient style={[styles.listItemContainer]} colors={item.colors}>
                <Image source={item.backgroundImage} style={styles.backgroundImage}/>

                <View style={styles.between}>
                    <View style={styles.targetDateContainer}>
                        <Feather name="target" size={12} color={whiteLessTransparent} />
                        <Text style={styles.targetDate}>31.12.2024</Text>
                    </View>
                    <View style={styles.initialsBox}>
                        <Text style={styles.initials}>
                            {item.initials}
                        </Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.listItemLabel}>{item.title}</Text>
                    
                </View>
                <View style={styles.between}>
                    <ProgressBar progress={item.progress} width={70}/>
                    <View style={styles.daysLeftContainer}>
                        <Text style={styles.daysLeftText}>122 days</Text>
                    </View>
                </View>


            </LinearGradient>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '120%',
        height: '120%',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.4,
        marginLeft: -10,
        
        
    },
    listItemContainer: {
        width: 320,
        height: 200,
        borderRadius: 25,
        elevation: 5,
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginRight: 40
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
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    targetDateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    between: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',

        gap: 10,
        width: '100%'
    }
})