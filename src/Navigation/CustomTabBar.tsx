import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screen/HomeScreen';
import GalleryScreen from '../Screen/GalleryScreen';
import TodoScreen from '../Screen/TodoScreen';


const Tab = createBottomTabNavigator();

const CustomTabBar = () => (
  <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ color, size }) => {
    //     const icons: { [key: string]: string } = {
    //       Home: 'home',
    //       Gallery: 'images',
    //     };
    //     return <Icon name={icons[route.name]} size={size} color={color} />;
    //   },
    // })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Gallery" component={GalleryScreen} />
    <Tab.Screen name="Todos" component={TodoScreen} />

  </Tab.Navigator>
);

export default CustomTabBar;
