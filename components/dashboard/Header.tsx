import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { primary, whiteLessTransparent, whiteSemiTransparent } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";


export const Header = () => {

    const navigation = useNavigation();
    const date = new Date();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.drawerButton} onPress={openDrawer}>
                    <Feather name="menu" size={20} color={whiteLessTransparent}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date}>
                    <Text style={styles.dateLabel}>Hello Patryk! Today is</Text>
                    <Text style={styles.dateValue}>{date.toDateString()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notifyWrapper}>
                    <Feather name='bell' size={18} color={whiteLessTransparent}/>
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
        height: '25%',
        position: 'relative' ,
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',

            
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    date: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateLabel: {
        fontSize: 14,
        color: whiteSemiTransparent
    },
    dateValue: {
        fontSize: 18,
        color: 'rgba(255,255,255, 0.6)'
    },
    notifyWrapper: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: whiteSemiTransparent
    }
})