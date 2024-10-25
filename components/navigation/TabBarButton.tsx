import { Pressable, View, StyleSheet } from "react-native";
import { icons } from "@/assets/icons";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import { primary } from "@/constants/Colors";

type RouteNames = 'index' | 'profile';

interface TabBarButtonProps {
    isFocused: boolean,
    routeName: string,
    color: string,
    onPress: () => void,
    onLongPress: () => void,
}

export const TabBarButton = (props: TabBarButtonProps) => {

    const { isFocused, routeName, color, onPress } = props

    const scale = useSharedValue(0);
    const circleScale = useSharedValue(1);

    useEffect(() => {
        scale.value = withSpring(
            typeof isFocused === 'boolean'? (isFocused? 1: 0) : isFocused,
            { duration: 350 }
        )
        circleScale.value = isFocused ? 
        withSpring(
            typeof isFocused === 'boolean'? (isFocused? 0: 1) : isFocused,
            { duration: 350 }
        )
        : 
        withTiming(typeof isFocused === 'boolean'? (isFocused? 0: 1) : isFocused,
        { duration: 150 })

    },[scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(
            scale.value,
            [0 ,1],
            [0.8, 1.2]
        )

        return {
            transform: [{scale: scaleValue}]
        }
    })

    const animatedCircleStyle = useAnimatedStyle(() => {
        const circle = interpolate(
            circleScale.value,
            [1 ,0],
            [0, 1]
        )

        return {
            transform: [{scale: circle}]
        }
    })

    return (
        <Pressable {...props} style={styles.container}>
            <Animated.View style={[animatedIconStyle, {zIndex: 5}]}>
                { icons[routeName as RouteNames]({color}) }
            </Animated.View>
            <Animated.View style={[animatedCircleStyle, styles.circle]}>

            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    circle: {
        width: 50,
        height: 50,
        backgroundColor: primary,
        position: 'absolute',
        borderRadius: 50
    }


})