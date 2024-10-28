import React, { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Login } from "./login";
import { Register } from "./register";
import { AuthBtn } from "@/components/authButton";
import { Container } from "@/components/container";
import { whiteLessTransparent } from "@/constants/Colors";
import Bg from '@/assets/images/loginScreenBg.png';


export const Auth = ({
    login
}:{
    login: (userData: any) => void
}) => {

    const [ loginScreen, setloginScreen ] = useState<boolean>(true);


    return (
        <Container>
            <KeyboardAvoidingView
                style={{flex: 1, width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center'}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior for different platforms
                keyboardVerticalOffset={30}
            >  
                <Image source={Bg} style={styles.backgroundImage}/>
                <ScrollView 
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    <View></View>
                    <View style={styles.lowerContainer}>
                        <Text style={styles.headerText}>{loginScreen ? 'Welcome back!' : 'Join us!'}</Text>
                        {loginScreen ? <Login login={login}/> : <Register />}
                        <AuthBtn onPress={() => setloginScreen(!loginScreen)} isSwitch={true} type={loginScreen ? 'register' : 'login'}/>
                    </View>


                </ScrollView>
                

            </KeyboardAvoidingView>
        </Container>
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
        justifyContent: 'space-between', // Center contents vertically in the ScrollView
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
        paddingVertical: 40,
        borderRadius: 20,

        display: 'flex',
        justifyContent: 'center',
        gap: 30,

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
        opacity: 0.2,
        bottom: 0,
        width: '200%',
        height: '100%',
        marginLeft: -410,
        position: 'absolute',
        zIndex: -10
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
        backgroundColor: 'rgba(255,255,255,0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dividerText:{
        position: 'absolute',
        color: '#999',
        padding: 4,
        paddingHorizontal: 10,
        backgroundColor: 'black'
    },
    headerText: {
        fontSize: 35,
        color: whiteLessTransparent,
        marginBottom: 20
    }
    
    
})