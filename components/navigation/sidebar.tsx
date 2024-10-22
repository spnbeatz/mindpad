import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface SidebarProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  title?: string
}

const Sidebar: React.FC<SidebarProps> = ({ children, direction = 'left', title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translateX = useSharedValue(direction === 'left' ? -width : width); // Ustawienie początkowej pozycji w zależności od kierunku
  const contentTranslateX = useSharedValue(0); // Nowa shared value do przesuwania treści

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: contentTranslateX.value }], // Przesuwanie treści w prawo lub lewo
    };
  });

  const toggleSidebar = () => {
    const duration = 200;
    setIsOpen(!isOpen);

    if (!isOpen) {
      translateX.value = withTiming(0, { duration }); // Otwórz sidebar
      contentTranslateX.value = withTiming(direction === 'left' ? width : -width, { duration }); // Przesuń treść
    } else {
      translateX.value = withTiming(direction === 'left' ? -width : width, { duration }); // Zamknij sidebar
      contentTranslateX.value = withTiming(0, { duration }); // Przywróć treść do pozycji
    }
  };

  // Gest przesuwania
  const panGesture = Gesture.Pan().onUpdate((event) => {
    translateX.value = direction === 'left'
      ? Math.max(-width, Math.min(0, translateX.value + event.translationX))
      : Math.max(0, Math.min(width, translateX.value + event.translationX));
  }).onEnd(() => {
    const shouldOpen = direction === 'left' ? translateX.value > -width * 0.5 : translateX.value < width * 0.5;

    if (shouldOpen) {
      translateX.value = withSpring(0); // Jeśli przesunięcie przekroczy połowę, otwórz menu
      contentTranslateX.value = withSpring(direction === 'left' ? width : -width); // Przesuń treść
      setIsOpen(true);
    } else {
      translateX.value = withSpring(direction === 'left' ? -width : width); // W przeciwnym wypadku zamknij menu
      contentTranslateX.value = withSpring(0); // Przywróć treść do pozycji
      setIsOpen(false);
    }
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Sidebar */}
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.sidebar, animatedStyle]}>

          </Animated.View>
        </GestureDetector>

        {/* Przycisk do otwierania/zamykania menu */}
        <Ionicons
          name={isOpen ? "arrow-back" : "menu"}
          size={30}
          color={'#222'}
          onPress={toggleSidebar}
          style={styles.button}
        />
        {!isOpen && <Text style={styles.title}>{title}</Text>}
        {/* Główna treść aplikacji */}
        <Animated.View style={[styles.content, contentStyle]}>
            {children}
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    position: 'absolute',
    top: 35,
    left: 8,
    zIndex: 10,
    padding: 10,
  },
  title: {
    position: 'absolute',
    top: 35,
    left: 50,
    zIndex: 10,
    fontSize: 20,
    fontStyle: 'italic',
    padding: 11
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0, // Sidebar otwierający się z prawej
    width: width,
    height: '100%',
    backgroundColor: '#FFF',
    padding: 20,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  content: {
    width: width,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 85,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    position: 'relative'
  },
  background: {
    position: 'absolute',
    resizeMode: 'cover'
  }
});

export default Sidebar;

