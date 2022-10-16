import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = props => {
  const { title } = props;
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3949ab",
    height: 70,
    // paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
