import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { whiteSemiTransparent } from '@/constants/Colors';


export const SearchButton = ({
    openSearch
}:
{
    openSearch: () => void
}) => {
    return (
        <TouchableOpacity style={styles.searchBarButton} onPress={openSearch}>
            <Feather name="search" size={20} color={whiteSemiTransparent}/>
            <Text style={styles.searchButtonText}>Search...</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    searchBarButton: {
        width: '95%',
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        gap: 15,
        position: 'absolute',
        top: 150
    },
    searchButtonText: {
        color: whiteSemiTransparent
    },
})