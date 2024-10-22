import { View, Text, StyleSheet } from "react-native";

export const DailyMotivation = () => {
    return (
        <View style={styles.noteContainer}>
            <Text style={styles.label}>Your daily motivation</Text>
            <Text style={styles.noteText}>
                "I am capable, resilient, and open to the opportunities that come my way. I trust in my ability to create a fulfilling and joyful life."
                "I release negative thoughts and embrace inner calm."
                "I am surrounded by peace and tranquility."
            </Text>
{/*             <View style={styles.triangle}/>
            <View style={[styles.triangle, {right: 0, bottom: 0, transform: 'rotate(0deg)'}]}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    noteContainer: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: 'black',
        backgroundColor: 'white',
        elevation: 5,
        position: 'relative',
        overflow: 'hidden'
    },
    label: {
        fontSize: 17,
        color: 'black',

    },
    noteText: {
        color: 'black',
        fontSize: 12,
        lineHeight: 20
    },
    triangle: {
        width: 0,
        height: 0,
        position: 'absolute',
        borderLeftWidth: 15, // Dostosuj te wartości do potrzeb
        transform: 'rotate(180deg)',
        borderBottomWidth: 15, // Wysokość trójkąta
        borderLeftColor: 'transparent', // Kolor lewego boku
        borderRightColor: 'transparent', // Kolor prawego boku
        borderBottomColor: 'darkorange', // Kolor dolnego boku
    },
    
})