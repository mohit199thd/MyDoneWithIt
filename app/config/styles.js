import React from "react";
import { Platform } from "react-native";
import colors from "../config/colors";

export default {
  text: {
    fontSize: 15,
    color: colors.dark,
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
