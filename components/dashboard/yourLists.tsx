import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const YourLists = () => {

    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
        { id: '6', title: 'Item 6' },
    ];

    return (
        <View style={styles.container}>
            {data.map(item => {
                return (
                    <View style={styles.listItemContainer} key={item.id}>
                        <Text>{item.title}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        width: '100%',
        gap: 10
      },
      listItemContainer: {
        width: '48%',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 100,
        marginBottom: 4,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
})