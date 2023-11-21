// src\screens\HomeScreen\index.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import QRCodeScreen from '../QRCodeScreen';
import AccountScreen from '../AccountScreen';
import mapScreen from '../MapScreen';

const Tab = createBottomTabNavigator();

const qrcodeName = 'QRCode';
const accountName = 'Account';
const mapName = 'Map';

const HomeScreenController = () => {
  return (
    <Tab.Navigator
      initialRouteName={QRCodeScreen}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === mapName) {
            iconName = focused ? 'map' : 'map';
          } else if (rn === qrcodeName) {
            iconName = focused ? 'qrcode' : 'qrcode';
          } else if (rn === accountName) {
            iconName = focused ? 'home' : 'home';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })} >

      <Tab.Screen name={mapName} component={mapScreen} />
      <Tab.Screen name={qrcodeName} component={QRCodeScreen} />
      <Tab.Screen name={accountName} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreenController;