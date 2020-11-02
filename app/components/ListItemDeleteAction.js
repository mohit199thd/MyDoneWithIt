import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.screen}>
        <MaterialCommunityIcons name="trash-can" size={34} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.danger,
    width: 70,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
