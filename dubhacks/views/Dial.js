import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dial = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeTab, setActiveTab] = useState('Dial');
  const navigation = useNavigation();

  const handleNumberPress = (number) => {
    // Append the selected number to the phone number string
    setPhoneNumber(phoneNumber + number);
  };

  const handleCall = () => {
    // Implement your call functionality here using the `phoneNumber` state
    // For demonstration purposes, we'll just log the number to the console.
    console.log('Calling: ' + phoneNumber);
  };

  const handleDelete = () => {
    // Remove the last digit from the phone number string when the 'DEL' button is pressed
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Contacts' ? styles.activeTab : null]}
          onPress={() => navigation.navigate('Contacts')}
        >
          <Text style={styles.tabButtonText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Dial' ? styles.activeTab : null]}
          onPress={() => navigation.navigate('Dial')} // Navigate to 'Dial' when 'Dial' tab is clicked
        >
          <Text style={styles.tabButtonText}>Dial</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberRow}>
        <View style={styles.numberDisplay}>
          <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
        </View>
        <TouchableOpacity style={styles.smallButton} onPress={handleDelete}>
          <Text style={styles.smallButtonText}>DEL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberPad}>
        <View style={styles.numberRow}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.numberButton}
              onPress={() => handleNumberPress(number)}
            >
              <Text style={styles.numberButtonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numberRow}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.numberButton}
              onPress={() => handleNumberPress(number)}
            >
              <Text style={styles.numberButtonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numberRow}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.numberButton}
              onPress={() => handleNumberPress(number)}
            >
              <Text style={styles.numberButtonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numberRow}>
          {['*', 0, '#'].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.numberButton}
              onPress={() => handleNumberPress(number)}
            >
              <Text style={styles.numberButtonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 50,
  },
  tabButton: {
      padding: 10,
      borderRadius: 10,
  },
  activeTab: {
      backgroundColor: '#5267B3',
  },
  tabButtonText: {
      fontSize: 16,
      color: 'black',
  },
  pageTitle: {
    fontSize: 24,
    margin: 20,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberDisplay: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    flex: 0.6, 
  },
  phoneNumberText: {
    fontSize: 25,
  },
  numberPad: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  numberButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#5267B3',
    borderRadius: 50,
  },
  smallButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#FF0000',
    borderRadius: 50,
  },
  numberButtonText: {
    color: 'white',
    fontSize: 20,
  },
  smallButtonText: {
    color: 'white',
    fontSize: 16,
  },
  callButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#5267B3',
    borderRadius: 50,
  },
  callButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Dial;