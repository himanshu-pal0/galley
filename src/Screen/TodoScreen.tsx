import React, { useState } from 'react';
import { FlatList, TextInput, Button, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addTodo, toggleTodo, deleteTodo } from '../redux/todoSlice';

const TodoScreen = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button
        title="Add Todo"
        onPress={() => {
          if (newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
          }
        }}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text
              style={[
                styles.todoText,
                item.completed && styles.completedText,
              ]}
            >
              {item.text}
            </Text>
            <Button
              title={item.completed ? 'Undo' : 'Done'}
              onPress={() => dispatch(toggleTodo(item.id))}
            />
            <Button
              title="Delete"
              onPress={() => dispatch(deleteTodo(item.id))}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 16 },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  todoText: { fontSize: 16 },
  completedText: { textDecorationLine: 'line-through', color: 'gray' },
});

export default TodoScreen;
