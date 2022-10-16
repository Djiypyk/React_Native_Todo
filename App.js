import React, { useState } from "react";
import type { Node } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

const App: () => Node = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos((prev) => [{ id: Date.now().toString(), title }, ...prev]);
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <View>
      <Navbar title={"New app"} />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo todo={item} removeTodo={removeTodo} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default App;
