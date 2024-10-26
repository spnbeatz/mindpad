import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { whiteSemiTransparent } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import CardBackground1 from '@/assets/images/cardbcg3.png';
import CardBackground2 from '@/assets/images/cardbcg2.png';
import { TargetListItem } from "../TargetListItem";



export const YourTargetsList = () => {

    const data = [
        {
            id: '1',
            colors: ["#c60e82", "#fd085f"],
            backgroundImage: CardBackground1,
            title: 'Read 100 books'
        },
        {
            id: '2',
            colors: ["#102a99", "#13697e"],
            backgroundImage: CardBackground2,
            title: 'Start career'
        }
        
        
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your Targets {`(`}{data.length}{`)`}</Text>
            <FlatList 
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TargetListItem item={item} />}
                ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                snapToAlignment="start"  // Wyrównanie do początku
                decelerationRate="fast"
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingVertical: 20,
        gap: 20
    },
    label: {
        color: whiteSemiTransparent,
        fontSize: 18,
        fontWeight: '900',
        width: '100%'
    },
    listItemContainer: {
        width: 167,
        height: 200,
        borderRadius: 25,
        elevation: 5,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        gap: 10
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.4
    }
})