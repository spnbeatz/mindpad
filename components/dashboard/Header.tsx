import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { primary } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";



export const Header = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.drawerButton}>
                    <Feather name="menu" size={25} color={'white'}/>
                </TouchableOpacity>
            </View>
{/*             <Text style={styles.cardLabel}>It's time to take action!</Text>
            <Text style={styles.cardSubLabel}>Just take a look at what you need to do soon.</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '40%',
        backgroundColor: primary,
        padding: 30,
        position: 'relative' ,
        paddingTop: 50
            
    },
    cardLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
    },
    cardSubLabel: {
        color: 'white'
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    drawerButton: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'darkturquoise',
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
})