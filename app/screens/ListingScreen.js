import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen() {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
export default ListingScreen;
