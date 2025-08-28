import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.content}>Settings</Text>
    </View>
  );
};

export default SettingsScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    color: "white",
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "900",
  },
});
