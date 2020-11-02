import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 24,
    marginVertical: 8,
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
