import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTodo, toggleTodo, deleteTodo } from '../redux/todoSlice';
import { FlatList, TextInput, Button, View, Text, StyleSheet } from 'react-native';
import globalStyles from '../Styles/globalStyles';


const HomeScreen = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add Todo" onPress={() => dispatch(addTodo(newTodo))} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text style={item.completed ? styles.completed : undefined}>{item.text}</Text>
            <Button title="Toggle" onPress={() => dispatch(toggleTodo(item.id))} />
            <Button title="Delete" onPress={() => dispatch(deleteTodo(item.id))} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, marginBottom: 8, padding: 8 },
  todo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  completed: { textDecorationLine: 'line-through' },
});

export default HomeScreen;
