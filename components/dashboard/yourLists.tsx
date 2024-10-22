import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ProgressBar } from "../progressBar";
import { Ionicons } from "@expo/vector-icons";

export const YourLists = () => {

    const data = [
        { id: '1', title: 'Become a YouTuber', progress: 90 },
        { id: '2', title: 'Learn cooking', progress: 25 },
        { id: '3', title: 'Book list', progress: undefined },

    ];

    return (
        <View style={styles.container}>
            {data.map(item => {
                return (
                    <View style={styles.listItemContainer} key={item.id}>
                        <Text style={styles.title}>{item.title}</Text>
                        <ProgressBar progress={item.progress} width={45}/>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        
        justifyContent: 'flex-start',

        width: '100%',
        gap: 10
      },
      listItemContainer: {
        width: '100%',
        borderWidth: 0.3,
        borderColor: '#000',
        padding: 15,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        backgroundColor: 'white'
      },
      title: {
        width: '50%'
      }
})