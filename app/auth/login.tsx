
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import { AuthBtn } from '@/components/authButton';
import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const Login = () => {

    const [ passwordHidden, setPasswordHidden ] = useState<boolean>(true);
    const { login } = useAuth();

    return (
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
              console.log(values);
              if(values.email && values.password) {
                login(values.email);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View
                  style={styles.contentContainer}
              >
                <Input 
                  style={styles.input}
                  containerStyle={styles.inputContainer}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='E-mail'
                  leftIcon={
                      <Ionicons name='person' size={18} color={'#888'}/>
                  }
                />
      

                <Input
                  style={styles.input}
                  containerStyle={styles.inputContainer}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Password'
                  leftIcon={
                    <Ionicons name='key' size={18} color={'#888'}/>
                  }
                  secureTextEntry={passwordHidden}
                  rightIcon={
                    <Ionicons 
                      name={passwordHidden ? 'eye-off' : 'eye'} 
                      size={18} 
                      color={'#888'}
                      onPress={()=>setPasswordHidden(!passwordHidden)}
                    />
                  }
                />
                <Text style={styles.forgotPassword}>Forgot password?</Text>
                <AuthBtn onPress={handleSubmit} isSwitch={false} type={'login'} />
              </View>
            )}
          </Formik>

      );
}
const styles = StyleSheet.create({
    contentContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      gap: 15
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center', // Center contents vertically in the ScrollView
      padding: 16,
    },
    label: {
      marginBottom: 8,
    },
    input: {
      paddingLeft: 8,
      width: '100%',
      fontSize: 14
    },
    button: {
        backgroundColor: 'orange'
    },
    inputContainer: {
        width: '100%',
        height: 50
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'orange'
    }
  });