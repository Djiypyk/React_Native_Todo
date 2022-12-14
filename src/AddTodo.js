import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = (props) => {
  const { onSubmit } = props;
  const [text, setText] = useState("");
  const pressHandler = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    } else {
      Alert.alert("Input can`t be empty");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={"Entry your task"}
        autoCorrect={false}
        autoCapitalaize={"sentences"}
      />
      <Button title={"Add"} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    marginBottom: 10,
  },
});
