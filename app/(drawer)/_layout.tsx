import { Drawer } from 'expo-router/drawer';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { getActiveTabRouteName } from '@/components/navigation/TabBar';
import SearchBar from '@/components/searchBar';
import { primary } from '@/constants/Colors';
import { useAuth } from '../context/AuthContext';

export default function DrawerLayout() {

    const { logout } = useAuth();

    const activeRoute = getActiveTabRouteName();

    return (
        <Drawer
            drawerContent={() => (
                <TouchableOpacity 
                    style={{width: 50, height: 50, backgroundColor: 'red'}}
                    onPress={logout}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            )}
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