import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScanner from './screens/Qrscanner';
import Register from './screens/Register';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator>
    {/* Eerste scherm dat je ziet als je de app opent */}
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="QR-Scanner" component={QRScanner} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="QR-Scanner" 
          component={AuthenticationStack} 
          options={{ tabBarLabel: 'Scanner' }} 
        />
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
