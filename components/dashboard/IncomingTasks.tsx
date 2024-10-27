import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { whiteSemiTransparent, whiteLessTransparent } from "@/constants/Colors";
import { Task } from "../Task";

export const IncomingTasks = () => {

    const tasks = [
        {
            id: '1',
            name: 'Read clean code',
            end: '30.10.2024',
            targetInitials: 'RB',
            targetColors: ["#c60e82", "#fd085f"],
            
        },
        {
            id: '2',
            name: 'Create a CV',
            end: '31.10.2024',
            targetInitials: 'SC',
            targetColors: ["#102a99", "#13697e"]
        },
        {
            id: '3',
            name: 'Looking for new job',
            end: '05.11.2024',
            targetInitials: 'SC',
            targetColors: ["#102a99", "#13697e"]
        },
        {
            id: '4',
            name: 'Read how to create an application in RN',
            end: '05.11.2024',
            targetInitials: 'RB',
            targetColors:["#c60e82", "#fd085f"]
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Incoming Tasks {'('}{tasks.length}{')'}</Text>
            <FlatList 
                data={tasks}
                keyExtractor={(item) => item.id}

                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <Task task={item}/>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10,
        marginTop: 20,
        height: '32%',

    },
    label: {
        color: whiteSemiTransparent,
        fontSize: 18,
        fontWeight: '900',
        width: '100%'
    },
})