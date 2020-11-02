import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImage from "./app/screens/ViewImage";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

import colors from "./app/config/colors";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen/>
}
