import { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Login } from "./login";
import { Register } from "./register";
import BackgroundImage from '@/app/assets/loginbackground.jpg';
import { AuthBtn } from "@/components/authButton";

export const Auth = () => {

    const [ login, setLogin ] = useState<boolean>(true);

    return (
        <KeyboardAvoidingView
            style={{flex: 1, width: '100%', flexDirection: 'column', justifyContent: 'flex-end'}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior for different platforms
            keyboardVerticalOffset={30}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.upperContainer}>
                    <Image source={BackgroundImage} style={styles.backgroundImage}/>
                    <Text style={styles.titleText}>
                        {login ? "Welcome \nback!" : "Create \naccount."}
                    </Text>
                </View>

                <View style={styles.lowerContainer}>
                    {login ? <Login/> : <Register />}
                    <View style={styles.divider}>
                        <Text style={styles.dividerText}>or</Text>
                    </View>
                    
                    <AuthBtn onPress={() => setLogin(!login)} isSwitch={true} type={login ? 'register' : 'login'}/>
                </View>


            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center', // Center contents vertically in the ScrollView
        alignItems: 'center',
        flexDirection: 'column',
      },
    upperContainer: {
        height: '50%',
        width: '100%',
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    lowerContainer: {
        width: '100%',
        padding: 20,
        flex: 1, // Umożliwia dolnemu kontenerowi zajęcie reszty dostępnej przestrzeni
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 30
    },
    switch: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20
        
    },
    clicableText: {
        color: 'blue',
    
    },
    switchText: {
        fontSize: 11
    },
    backgroundImage: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    titleText: {
        fontSize: 35,
        color: 'white',
        position: 'absolute',
        bottom: '25%',
        left: '10%',
        fontWeight: 'bold',
        letterSpacing: 1.5
    },

    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#BBB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dividerText:{
        position: 'absolute',
        color: '#999',
        padding: 4,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    }
    
    
})