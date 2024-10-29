import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { AuthProvider } from './context/AuthContext';
import { Drawer } from 'expo-router/drawer'
import { useColorScheme } from '@/hooks/useColorScheme';
import * as NavigationBar from 'expo-navigation-bar';
import { 
  useFonts, 
  Poppins_100Thin, Poppins_100Thin_Italic,
  Poppins_200ExtraLight, Poppins_200ExtraLight_Italic,
  Poppins_300Light, Poppins_300Light_Italic,
  Poppins_400Regular, Poppins_400Regular_Italic,
  Poppins_500Medium, Poppins_500Medium_Italic,
  Poppins_600SemiBold, Poppins_600SemiBold_Italic,
  Poppins_700Bold, Poppins_700Bold_Italic,
  Poppins_800ExtraBold, Poppins_800ExtraBold_Italic,
  Poppins_900Black, Poppins_900Black_Italic
} from '@expo-google-fonts/poppins'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins_100Thin, Poppins_100Thin_Italic,
    Poppins_200ExtraLight, Poppins_200ExtraLight_Italic,
    Poppins_300Light, Poppins_300Light_Italic,
    Poppins_400Regular, Poppins_400Regular_Italic,
    Poppins_500Medium, Poppins_500Medium_Italic,
    Poppins_600SemiBold, Poppins_600SemiBold_Italic,
    Poppins_700Bold, Poppins_700Bold_Italic,
    Poppins_800ExtraBold, Poppins_800ExtraBold_Italic,
    Poppins_900Black, Poppins_900Black_Italic
    
  });


  useEffect(() => {
    if (loaded) {
      NavigationBar.setBackgroundColorAsync('black');
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }}/>
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="TargetScreen" options={{ headerShown: false}}/>
        </Stack>

      </AuthProvider>

    </ThemeProvider>
  );
}
