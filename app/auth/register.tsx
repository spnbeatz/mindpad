
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { AuthBtn } from '@/components/authButton';
import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { validatePassword } from '@/scripts/passwordValidation';
import { primary } from '@/constants/Colors';

export const Register = () => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>(undefined);
    const [ passwordHidden, setPasswordHidden ] = useState<boolean>(true);
    const [ passwordRepeatHidden, setPasswordRepeatHidden ] = useState<boolean>(true);

    return (
        <Formik
          initialValues={{ email: '', password: '', passwordRepeat: '' }}

          onSubmit={values => {
            console.log(values);
            if(values.password != values.passwordRepeat){
                setErrorMessage("Passwords does not match! Please try again!")
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
                    <Ionicons name='mail' size={18} color={'#888'}/>
                }
                autoCapitalize='none'

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
              <Input
                style={[styles.input]}
                containerStyle={styles.inputContainer}
                onChangeText={handleChange('passwordRepeat')}
                onBlur={handleBlur('passwordRepeat')}
                value={values.passwordRepeat}
                placeholder='Repeat password'
                errorMessage={errorMessage}
                leftIcon={
                    <Ionicons name='key' size={18} color={'#888'}/>
                }
                secureTextEntry={passwordRepeatHidden}
                rightIcon={
                  <Ionicons 
                    name={passwordRepeatHidden ? 'eye-off' : 'eye'} 
                    size={18} 
                    color={'#888'}
                    onPress={()=>setPasswordRepeatHidden(!passwordRepeatHidden)}
                  />
                }
              />
              <AuthBtn onPress={handleSubmit} isSwitch={false} type={'register'} />
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
    label: {
      marginBottom: 8,
    },
    input: {
      paddingLeft: 8,
      width: '100%',
      fontSize: 14
    },
    button: {
        backgroundColor: primary
    },
    inputContainer: {
        width: '100%',
        height: 50
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: 'bold',
        color: primary
    }
  });