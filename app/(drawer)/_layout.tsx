import { Drawer } from 'expo-router/drawer';
import { Text, StyleSheet } from 'react-native';
import { getActiveTabRouteName } from '@/components/navigation/TabBar';
import SearchBar from '@/components/searchBar';
import { primary } from '@/constants/Colors';

export default function DrawerLayout() {

    const activeRoute = getActiveTabRouteName();

    return (
        <Drawer
            screenOptions={{ 
                headerShown: false, 
                swipeEdgeWidth: 0,
                drawerType: 'slide',
                drawerActiveBackgroundColor: primary,
                drawerActiveTintColor: 'white',
                headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
                
                
            }}
        >
            <Drawer.Screen
                name='(tabs)'
                options={({ route }) => ({
                    drawerLabel: 'Home',
                    title: 'Home',
                    headerRightContainerStyle: styles.headerRight,
                    headerRight: () => {
                        if(activeRoute == 'index') {
                            return (
                                <SearchBar />
                            )
                        }

                    }
                })}
            >
                
            </Drawer.Screen>
        </Drawer>
    )
}

const styles = StyleSheet.create({
    headerRight: {
        position: 'absolute',
        width: '65%',
        right: 0,
        height: '100%',
        paddingRight: 15

    }
})