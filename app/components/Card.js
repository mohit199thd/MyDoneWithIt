import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import color from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.textColor}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    backgroundColor: color.white,
    marginBottom: 14,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 11,
  },
  text: {
    marginBottom: 12,
  },
  textColor: {
    color: colors.secondary,
    fontWeight: "900",
  },
});
export default Card;
