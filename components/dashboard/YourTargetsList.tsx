import { View, StyleSheet, Text, FlatList } from "react-native";
import { whiteSemiTransparent } from "@/constants/Colors";
import CardBackground1 from '@/assets/images/cardbcg3.png';
import CardBackground2 from '@/assets/images/cardbcg2.png';
import { TargetListItem } from "../TargetListItem";



export const YourTargetsList = () => {

    const data = [
        {
            id: '1',
            colors: ["#c60e82", "#fd085f"],
            backgroundImage: CardBackground1,
            title: 'Read books about programming',
            progress: 80,
            initials: 'RB'
        },
        {
            id: '2',
            colors: ["#102a99", "#13697e"],
            backgroundImage: CardBackground2,
            title: 'Start career',
            progress: 20,
            initials: 'SC'
        },

        
        
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your Targets {`(`}{data.length}{`)`}</Text>
            <FlatList 
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TargetListItem item={item} />}
                snapToAlignment="start"  // Wyrównanie do początku
                decelerationRate="fast"
                contentContainerStyle={{paddingRight: 40}}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        width: '110%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingVertical: 20,
        gap: 20,
        marginLeft: 35
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
        gap: 10,
        width: '100%',

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