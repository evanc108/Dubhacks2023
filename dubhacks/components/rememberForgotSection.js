import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const RememberForgotSection = ({ rememberMe, toggleRememberMe, fontLoaded }) => {
  return (
    <View style={styles.rememberForgot}>
      <TouchableOpacity
        style={[styles.rememberMeCheckbox, rememberMe && styles.checked]}
        onPress={toggleRememberMe}
      >
        {rememberMe && (
          <Image source={require('../images/check.png')} style={styles.checkImage} />
        )}
      </TouchableOpacity>
      <Text style={[styles.rememberText, fontLoaded && { fontFamily: 'poppins-thin' }]}>
        Remember me
      </Text>
      <Text style={styles.forgotPassword}>Forgot Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rememberForgot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#000',
    marginRight: 5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: '#000',
  },
  checkImage: {
    width: 15,
    height: 12,
  },
  rememberText: {
    fontSize: 14,
    marginRight: 110,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#000',
  },
});

export default RememberForgotSection;
