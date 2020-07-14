import 'react-native-gesture-handler'; // from navigation between screen

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import each GUI (Home, Youtube, Forum)
import {Home} from './GUI/Home';
import {YTChannel} from './GUI/YTChannel';
import {Forum} from './GUI/Forum';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Youtube" component={YTChannel} />
        <Tab.Screen name="Forum" component={Forum} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
