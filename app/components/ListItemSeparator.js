import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 7,
    backgroundColor: colors.grey,
  },
});

export default ListItemSeparator;
