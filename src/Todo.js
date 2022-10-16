import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Todo = (props) => {
  const { todo, removeTodo } = props;
  return (
    <TouchableOpacity
      onPress={() => console.log("Pressed", todo.id)}
      onLongPress={() => removeTodo(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
  },
});
