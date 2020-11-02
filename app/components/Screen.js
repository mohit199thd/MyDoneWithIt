import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // marginHorizontal: 15,
    marginHorizontal: 12,
    flex: 1,
  },
});

export default Screen;
