import { whiteSemiTransparent, whiteLessTransparent } from "@/constants/Colors";
import { TouchableOpacity, Text, View, StyleSheet} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withDelay } from 'react-native-reanimated';
import { LinearGradient } from "expo-linear-gradient";

interface TaskProps {
    id: string,
    name: string,
    end: string,
    targetInitials?: string,
    targetColors?: string[],
    finished?: boolean
}

export const Task = ({
    task,
    deleteTask
}:{
    task: TaskProps,
    deleteTask: () => void
}) => {

    const [ done, setDone ] = useState<boolean>(false);
    const [ display, setDisplay ] = useState<boolean>(true)

    const opacityValue = useSharedValue(1);

    const opacityStyle = useAnimatedStyle(() => {
        return {
            opacity: opacityValue.value
        }
    });

    useEffect(() => {
        if(done == true) {
            
            opacityValue.value = withDelay(300, withTiming(0, { duration: 300}));        }
    }, [done]);


    const handleDoneTask = () => {
        setDone(true);
        setTimeout(() => {   

            deleteTask(); 

                   
        }, 1000)
        
    }

    return (
        <Animated.View style={[styles.taskContainer, { display: display ? 'flex' : 'none' }, opacityStyle]}>
            <View style={[styles.nameContainer, { width: '60%'}]}>
                <TouchableOpacity 
                    style={styles.doneButton}
                    onPress={handleDoneTask}
                >
                    {done && <View style={styles.doneIconWrapper}>
                        <Feather 
                            name="check" 
                            size={12} 
                            color={'white'}
                        />
                    </View>}

                </TouchableOpacity>
                <Text style={styles.nameText}>{task.name}</Text>
            </View>
            <View style={styles.nameContainer}>
                <View style={styles.timeLeftBox}>
                    <Text style={styles.timeLeft}>30m</Text>
                </View>
                {task.targetColors && <LinearGradient colors={task.targetColors} style={styles.targetInitialsContainer}>
                    <Text style={styles.initialsText}>{task.targetInitials}</Text>
                </LinearGradient>}
            </View>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        height: 65,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15
    },
    doneButton: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor:whiteSemiTransparent,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    doneIconWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#20B2AA',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    nameText: {
        color: whiteLessTransparent,
        fontSize: 15
    },
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
    timeLeftBox: {
        height: 25,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    timeLeft: {
        color: whiteLessTransparent,
        fontSize: 12,
        fontWeight: 'bold'
    }
})