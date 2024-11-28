import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab, isFocused && styles.activeTab]}
          >
            <Text style={isFocused ? styles.activeText : styles.text}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: 'white' },
  tab: { flex: 1, padding: 10, alignItems: 'center' },
  activeTab: { backgroundColor: 'lightblue' },
  text: { color: 'gray' },
  activeText: { color: 'black' },
});

export default CustomTabBar;
