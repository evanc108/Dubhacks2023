import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SwitchButton = ({ backgroundColor, textColor, text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.switchButton, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.switchButtonText, { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchButton: {
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchButtonText: {
    padding: 12,
    fontSize: 18,
    color: 'white',
  },
});

export default SwitchButton;
