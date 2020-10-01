import 'react-native-gesture-handler'; // from navigation between screen

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import each GUI (Home, Games, Youtube, Forum)
import {Home} from './GUI/Home';
import {YTChannel} from './GUI/YTChannel/YTChannel';
import {Profile} from './GUI/Profile';
import {Games} from './GUI/Games';


const Tab = createBottomTabNavigator();

/**
 * main
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Games" component={Games} />
        <Tab.Screen name="Youtube" component={YTChannel} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
