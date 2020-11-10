import React from 'react';
import { StyleSheet,Text } from 'react-native';

function ErrorMessage({ error,visible }) {


  if (!visible ||!error) return null;
  
  return (
    <Text  style={styles.errro} >{error}</Text>

  );
  
}

const styles = StyleSheet.create({
  errro: {
    color:'red'
  }
});

export default ErrorMessage;