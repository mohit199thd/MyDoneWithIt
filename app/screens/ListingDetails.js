import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetails() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsConatiner}>
        <Text style={styles.title}>Red Jacket For Sale</Text>
        <Text style={styles.subTitle}>$100</Text>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamadani"
          subTitle="5 Listings"
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsConatiner: {
    padding: 12,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default ListingDetails;
