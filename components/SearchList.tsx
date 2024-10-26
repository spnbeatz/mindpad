import { FlatList, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useEffect } from "react";
import { whiteSemiTransparent } from "@/constants/Colors";

export const SearchList = ({results}: {results: string[]}) => {

    const scaleValue = useSharedValue(0);

    const scaleStyle = useAnimatedStyle(() => {
        return {
            transform: [{scale: scaleValue.value}]
        }
    });

    useEffect(() => {
        scaleValue.value = withSpring(1, { duration: 200 })
    }, [])

    return (
        <Animated.View style={[styles.searchListWrapper, scaleStyle]}>   
            <FlatList 
                data={results}
                keyExtractor={(item) => item}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity style={styles.searchListItem}>
                            <Text style={styles.searchListItemText}>{item.item}</Text>
                        </TouchableOpacity>
                    )
                }}
                
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    searchListWrapper: {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: '12%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 25,

    },
    searchListItem: {
        width: '100%',
        padding: 20,
        
    },
    searchListItemText: {
        color: whiteSemiTransparent,
        width: '100%',
        
    },
    separator: {
        width: '80%',
        height: 1,
        backgroundColor: 'rgba(255,255,255, 0.1)',
    }
})