// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScanner from './Qrscanner';
import Register from './Register';
//import App from './App';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ScannerStack = () => (
  <Stack.Navigator initialRouteName="Scanner" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Scanner">
      {() => (
        <QRScanner
          onScanned={(data) => {
            // Handle the scanned data as needed
            console.log('Scanned data:', data);
          }}
        />
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="QR-Sqcanner" component={ScannerStack} options={{ tabBarLabel: 'Scanner' }} />
        <Tab.Screen name="Register" component={Register} options={{ tabBarLabel: 'Register' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
