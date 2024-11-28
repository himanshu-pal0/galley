import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, View } from 'react-native';
import CustomTabBar from './src/Navigation/CustomTabBar';
import { useTheme } from './src/Context/ThemeContext';

const MainApp = () => {
  const { isDarkTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkTheme ? styles.dark : styles.light]}>
      <NavigationContainer>
        <CustomTabBar />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  dark: { backgroundColor: '#000' },
  light: { backgroundColor: '#fff' },
});

export default MainApp;
