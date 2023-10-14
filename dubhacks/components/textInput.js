import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ placeholder, fontLoaded }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, fontLoaded && { fontFamily: 'poppins-thin' }]}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    borderWidth: 0.6,
    borderColor: '#000',
    borderRadius: 25,
  },
  input: {
    padding: 13,
  },
});

export default TextInputField;
