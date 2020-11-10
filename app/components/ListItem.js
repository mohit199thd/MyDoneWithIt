import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import { MaterialCommunityIcons} from '@expo/vector-icons';

 
function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.textContainer}>
            <Text  numberOfLines={1}  style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
          <MaterialCommunityIcons color={colors.dark} name='chevron-right'  size={29} />

        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flexDirection: "row",

    paddingTop: 16,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 70 / 2,
  },
  textContainer: {
    flex:1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: { fontWeight: "bold" },
  subTitle: {
    color: "grey",
  },
});

export default ListItem;
