import { whiteLessTransparent } from "@/constants/Colors";
import { useState, useRef } from "react";
import { View, StyleSheet, Text, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { Task } from "./Task";

const { width } = Dimensions.get('window');

export const TargetTasksContainer = () => {
    const [checkpoints, setCheckpoints] = useState([
        { 
            date: '30.10.2024', 
            title: 'Read 20 books',
            tasks: [
                {
                    id: '1',
                    name: 'Read clean code, and try practice',
                    end: '29.10.2024',
                    finished: false
                },
                {
                    id: '2',
                    name: 'Read JS',
                    end: '29.10.2024',
                    finished: false
                }
            ]
        },
        { 
            date: '30.12.2024', 
            title: 'Read 40 books',
            tasks: [
                {
                    id: '3',
                    name: "Hello",
                    end: "25.11.2024",
                    finished: false
                },
                {
                    id: '4',
                    name: "Hello",
                    end: "25.11.2024",
                    finished: false
                },
                {
                    id: '5',
                    name: "Hello",
                    end: "25.11.2024",
                    finished: false
                }
            ]
        },
        { 
            date: '30.01.2025', 
            title: 'Read 50 books, and think about future',
            tasks: [
                {
                    id: '6',
                    name: "Hello",
                    end: "25.11.2024",
                    finished: false
                },
                {
                    id: '7',
                    name: "Hello",
                    end: "25.11.2024",
                    finished: false
                },
            ]
        }
    ]);

    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const tasksListRef = useRef<FlatList>(null);
    const checkpointsListRef = useRef<FlatList>(null);

    // Scroll function for the second FlatList
    const scrollToTaskGroup = (index: number) => {
        tasksListRef.current?.scrollToIndex({ index, animated: true });
    };

    // Update finishTask to remove empty checkpoints
    const finishTask = (checkpointIndex: number, taskIndex: number) => {
        setCheckpoints(prevCheckpoints =>
            prevCheckpoints
                .map((checkpoint, idx) =>
                    idx === checkpointIndex
                        ? { ...checkpoint, tasks: checkpoint.tasks.filter((_, i) => i !== taskIndex) }
                        : checkpoint
                )
                .filter(checkpoint => checkpoint.tasks.length > 0) // Remove checkpoints with no tasks
        );
    };

    return (
        <View style={styles.container}>
            {/* First FlatList */}
            <FlatList
                ref={checkpointsListRef}
                style={{ borderRightWidth: 0.5, width: '20%', paddingVertical: 10, borderColor: whiteLessTransparent }}
                contentContainerStyle={{ gap: 40}}
                data={checkpoints}
                keyExtractor={(item) => item.date}
                renderItem={({ item, index }) => {
                    const active = index === selectedIndex;
                    return (
                        <TouchableOpacity onPress={() => {
                            setSelectedIndex(index);
                            scrollToTaskGroup(index); // Scroll to the corresponding element in the second FlatList
                        }}>
                            <View style={styles.checkpointItem}>
                                <Text style={[styles.checkpointText, { fontWeight: active ? 'bold' : 'normal' }]}>
                                    {item.date}
                                </Text>
                                <View style={[styles.divider, { height: active ? 1.5 : 0.5, width: active ? '100%' : '70%' }]}>
                                    <View style={[styles.dividerCircle]} />
                                </View>
                                <Text style={[styles.checkpointText, { fontWeight: active ? 'bold' : 'normal' }]}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />

            {/* Second FlatList */}
            <FlatList
                ref={tasksListRef}
                data={checkpoints}
                style={{ width: '65%' }}
                keyExtractor={(item) => item.date}
                onScrollToIndexFailed={() => {}}
                onViewableItemsChanged={({ viewableItems }) => {
                    const visibleItem = viewableItems[0];
                    if (visibleItem) {
                        setSelectedIndex(visibleItem.index ?? 0);
                        checkpointsListRef.current?.scrollToIndex({
                            index: visibleItem.index ?? 0,
                            animated: true
                        });
                    }
                }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.taskGroup}>
                            {item.tasks.map((task: any) => (
                                <Task key={task.id} task={task} deleteTask={() => finishTask(index, item.tasks.findIndex((t: any) => t.id === task.id))} />
                            ))}
                        </View>
                    );
                }}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            />
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        width: width - 10,
        height: '100%'
    },
    checkpointItem: {
        width: '100%',
        alignItems: 'flex-end',
        paddingLeft: 15,
        justifyContent: 'center',
        gap: 5
    },
    checkpointText: {
        color: whiteLessTransparent,
        fontSize: 12,
        width: '70%'
    },
    divider: {
        width: '50%',
        height: 0.5,
        backgroundColor: whiteLessTransparent,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dividerCircle: {
        width: 5,
        height: 5,
        borderRadius: 20,
        backgroundColor: whiteLessTransparent,
        position: 'absolute',
        right: -2,
        
    },
    task: {
        width: '100%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskGroup: {
        width: '100%',
        paddingLeft: 15,
    },
    taskText: {
        fontSize: 14,
        color: whiteLessTransparent,

    }
})