import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextInput from '../components/AppTextInput';


import Screen from '../components/Screen';





function LoginScreen() {
    return (
        <Screen>

            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            
            <AppTextInput  placeholder='Email'   keyboardType='email-address'  />
            

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