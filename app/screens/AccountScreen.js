import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
const menueItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mohit"
          subTitle="mohit199thd@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menueItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  viewSize={40}
                  iconColor="white"
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        ImageComponent={
          <Icon
            name="logout"
            backgroundColor="#ffe66d"
            viewSize={40}
            iconColor="white"
          />
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  screen: {
    backgroundColor: colors.grey,
  },
});

export default AccountScreen;
