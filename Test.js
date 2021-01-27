// React Native Finish Current Screen while Navigating to Next Screen
// https://aboutreact.com/react-native-finish-current-screen-while-navigating-to-next-screen/

import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import AppName from './Screen2'

const Stack = createStackNavigator();

const Test = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppName">
        <Stack.Screen
          name="AppName"
          component={AppName}
          options={{
            title: 'India Parts', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'keyword', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Test;