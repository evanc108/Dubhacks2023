import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/Login';
import Contacts from './views/Contacts';
import Dial from './views/Dial';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Dial" component={Dial} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;