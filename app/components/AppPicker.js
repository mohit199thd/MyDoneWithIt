import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

 import PickerItem from "./PickerItem";
//import {  } from "react-native-gesture-handler";
//import { TouchableWithoutFeedback } from "react-native";
function AppPicker({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,   
  selectedItem,
  placeHolder,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={colors.defaultStyles.colors.medium}
              size={20}
              style={styles.icon}
            />
          )}
          <Text style={styles.textStyle}>
            {selectedItem ? selectedItem.label : placeHolder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.grey}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item }
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        ></FlatList>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: colors.dark,
    fontWeight: "700",
    // fontFamily: "Roboto",
  },
  icon: { marginRight: 10 },
  textStyle: {
    flex: 1,
  },
});

export default AppPicker;
