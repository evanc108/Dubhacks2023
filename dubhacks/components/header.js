import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <Text style={styles.welcome}>Welcome to DiaLog</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 90,
    height: 90,
  },
  welcome: {
    fontSize: 23,
    fontWeight: 'thin',
    marginTop: 10,
  },
});

export default Header;
