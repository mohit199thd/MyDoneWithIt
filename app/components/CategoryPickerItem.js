import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from './Icon';
 

function CategoryPickerItem({item,onPress}) {

    return <View style={styles.conatiner} >

        <Icon backgroundColor={item.backgroundColor} name={item.icon} iconSize={80} />
        <Text>{ item.label}</Text>
    </View>;
}


const styles = StyleSheet.create({
    conatiner: {
        
    }
    
});

export default CategoryPickerItem;