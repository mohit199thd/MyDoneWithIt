import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Colors, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';



function AppTextInput({icon,...otherProps}) {
    return (


        <View style={styles.conntainer} >
            {icon && <MaterialCommunityIcons style={styles.icon} color='grey'  size={20} name={icon} />}
            <TextInput   style={styles.textInput}{...otherProps} />
        </View>
    );
    
}


const styles = StyleSheet.create({
    conntainer: {
        padding: 5,
        backgroundColor: colors.light,
        borderRadius: 28,
        flexDirection: "row",
        width: '100%',
        marginBottom: 10,
        marginTop: 4,
        height:34, 
    },
    textInput: {
    fontWeight:'600',
        flex:1,
        paddingLeft:9,
        fontFamily:Platform.OS === 'android' ? 'Roboto': 'Avenir',
    },
    icon: {
        alignSelf: "center",
        marginLeft:2,
    }
});
export default AppTextInput;