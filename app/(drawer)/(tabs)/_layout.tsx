import { Tabs } from 'expo-router';
import React, { FC } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { TabBar } from '@/components/navigation/TabBar';
import DrawerContainer from '@/components/navigation/drawerContainer';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
      <Tabs
        tabBar={props=><TabBar {...props}/>}
        screenOptions={{
          
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarLabelStyle: { display: 'none' },
          tabBarStyle: { // Dodanie stylizacji paska nawigacji
            borderTopWidth: 0, // Usunięcie linii oddzielającej
            backgroundColor: 'white', // Możesz dostosować tło
            elevation: 0, // Usunięcie cienia (Android)
            
          },
          
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name='home' color={focused ? "white" :"darkorange"} size={28} style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: focused ? 'darkorange' : 'white'
              }}/>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name='user' color={focused ? "white" :"darkorange"} size={28} style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: focused ? 'darkorange' : 'white'
              }}/>
            ),
          }}
        />

      </Tabs>

  );
}
