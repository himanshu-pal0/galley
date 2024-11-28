import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimationComponent: React.FC = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[styles.box, animatedStyle]}
      onTouchStart={() => (scale.value = withTiming(1.5))}
      onTouchEnd={() => (scale.value = withTiming(1))}
    >
      <Text>Tap Me</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimationComponent;
