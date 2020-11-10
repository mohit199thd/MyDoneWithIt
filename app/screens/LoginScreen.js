import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import {AppFormField,AppForm,SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({

    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
  
}); 


function LoginScreen() {
    return (
        <Screen>

            <Image style={styles.logo} source={require('../assets/logo-red.png')} />    
            <AppForm
                    initialValues={{ password: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={values => console.log(values)}
            >
                   <AppFormField
                        
                            name='email'
                            icon='email'
                            placeholder='Email'
                            keyboardType='email-address' />
                       
                        <AppFormField
                            name='password'
                            icon='lock'
                            secureTextEntry
                            textContentType='password'
                            placeholder='Password'
                          />
                          
                       <SubmitButton title='Login' />





            </AppForm>

            

        </Screen>
    );  
}
const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom:50,    
    }
   
});



export default LoginScreen;