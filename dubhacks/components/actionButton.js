import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = ({ text, backgroundColor, fontLoaded, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.loginButton, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, fontLoaded && { fontFamily: 'poppins-thin' }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#9E896A',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'thin',
  },
});

export default ActionButton;
