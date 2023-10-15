import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, TextInput } from 'react-native';

import {
    startApp,
    userSignIn,
    userSignOut,
    getAllAccountLines,
} from '../yna/calling.js';

function Call() {
  const [connectionStatus, setConnectionStatus] = useState('Connected');
  const [fromNumber, setFromNumber] = useState('');
  const [toNumber, setToNumber] = useState('');
  const [callStatus, setCallStatus] = useState('disconnected');

  const WORKING = 'working...';
  const CALL = 'Call';
  const END = 'End';
  const CALLING = 'Calling...';
  const MUTE = 'Mute';
  const UNMUTE = 'Unmute';
  const HOLD = 'Hold';
  const RESUME = 'Resume';
  const DISCONNECTED = 'disconnected';

  useEffect(() => {
    handleStartApp();
  }, []);

  const handleStartApp = async () => {
    const appState = await startApp();
    setConnectionStatus(appState);
  };

  const handleSignIn = async () => {
    if (connectionStatus === 'CONNECTED') {
      await userSignIn();
    } else {
      console.error('Cannot sign in when not connected.');
    }
  };

  const handleSignOut = async () => {
    await userSignOut();
  };

  const handleGetAccountLines = async () => {
    await getAllAccountLines();
  };

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Text style={{ marginBottom: 8 }}>Connection Status: {connectionStatus}</Text>

        <Text style={{ marginBottom: 8 }}>From:</Text>
        <TextInput
          value={fromNumber}
          onChangeText={setFromNumber}
          placeholder="Enter from number"
          style={{ borderWidth: 1, borderColor: 'lightgray', padding: 8, marginBottom: 16 }}
        />

        <Text style={{ marginBottom: 8 }}>To:</Text>
        <TextInput
          value={toNumber}
          onChangeText={setToNumber}
          placeholder="Enter to number"
          style={{ borderWidth: 1, borderColor: 'lightgray', padding: 8, marginBottom: 16 }}
        />

        <Button title="Sign In" onPress={handleSignIn} style={{ marginBottom: 16 }} />
        <Button title="Sign Out" onPress={handleSignOut} style={{ marginBottom: 16 }} />
        <Button title="Get Account Lines" onPress={handleGetAccountLines} style={{ marginBottom: 16 }} />

        <Text>Call Status: {callStatus}</Text>
      </View>
    </ScrollView>
  );
}

export default Call;
