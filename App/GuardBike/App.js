import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScanner from './Qrscanner';
import Register from './Register';
import Login from './Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

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
        <Tab.Screen name="QR-Scanner" component={ScannerStack} options={{ tabBarLabel: 'Scanner' }} />
        {/* Add a new tab for authentication but hide it from the bottom nav bar */}
        <Tab.Screen
          name="Authentication"
          component={AuthenticationStack}
          options={{ tabBarLabel: 'Authentication', tabBarVisible: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
