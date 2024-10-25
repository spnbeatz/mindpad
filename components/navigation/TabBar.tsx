import { View, StyleSheet } from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from "react";
import { TabBarButton } from "./TabBarButton";
import { primary } from "@/constants/Colors";

let activeTabRouteName: string | null = 'index';

export const getActiveTabRouteName = () => activeTabRouteName;

export const TabBar = ({ state, descriptors, navigation, insets }: BottomTabBarProps) => {

  const [activeRoute, setActiveRoute] = useState(state.routes[state.index].name);

  useEffect(() => {
    setActiveRoute(state.routes[state.index].name);
    activeTabRouteName = state.routes[state.index].name;
}, []);

  return (
      <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = 'lab'
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if(['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = (routeName: string) => {
          setActiveRoute(routeName);
          activeTabRouteName = routeName;
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
              key={route.name}
              onPress={() => onPress(route.name)}
              onLongPress={onLongPress}

              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? 'white' : primary}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


        
    }
})