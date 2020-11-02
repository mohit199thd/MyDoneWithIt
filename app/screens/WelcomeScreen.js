import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";
import color from "../config/colors";
function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <AppButton
        color="primary"
        title="login"
        onPress={() => console.log("login")}
      ></AppButton>
      <AppButton
        title="Register"
        onPress={() => console.log("register")}
        color="secondary"
      ></AppButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  tagLine: {
    fontWeight: "600",
    fontSize: 15,
  },

  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },
});

export default WelcomeScreen;
