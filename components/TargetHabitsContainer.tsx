import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const TargetHabitsContainer = () => {

    const habits = [
        {
            name: "Clean house every week",
            frequency: 'weekly',
            done: [
                {
                    date: "03.11.2024",
                    quanity: null
                }
            ]
        }
    ]

    return (
        <FlatList 
            data={habits}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.listContainer}

            renderItem={({item})=> {
                return (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    habitContainer: {
        width: '100%'
    },
    listContainer: {
        width: width,
        height: '100%',
        backgroundColor: 'red'
    }
})