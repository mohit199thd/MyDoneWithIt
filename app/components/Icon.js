import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ name, iconColor, iconSize, backgroundColor, viewSize }) {
  return (
    <View
      style={{
        height: viewSize,
        width: viewSize,
        borderRadius: viewSize / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={viewSize * 0.5}
      />
    </View>
  );
}

export default Icon;
