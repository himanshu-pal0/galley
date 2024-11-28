import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.text }]}>
        Current Theme: {theme === 'dark' ? 'Dark' : 'Light'}
      </Text>
      <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: { fontSize: 16, marginBottom: 10 },
});

export default ThemeToggle;
