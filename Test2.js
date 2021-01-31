// Tab View inside Navigation Drawer

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer, getFocusedRouteNameFromRoute,} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './pages2/HomeScreen';
import ExploreScreen from './pages2/ExploreScreen';
import SettingScreen from './pages2/SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const NavigationDrawerStructure = (props) => {
  return (
   
      <TouchableOpacity onPress={() =>  props.navigation.toggleDrawer()}>
        <View style={{width: 40, height: 40,justifyContent:'center'}}>
          <View style={{flexDirection:'column',justifyContent: 'space-between',width: 25, height: 15, marginLeft: 15}}>
            <View style={{height:3,backgroundColor:'white',borderBottomColor:'lightgrey',borderBottomWidth:1}}/>
            <View style={{height:3,backgroundColor:'white',borderBottomColor:'lightgrey',borderBottomWidth:1}}/>
            <View style={{height:3,backgroundColor:'white',borderBottomColor:'lightgrey',borderBottomWidth:1}}/>
          </View>
        </View>
      </TouchableOpacity>
  )
}

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{ 
        activeTintColor: 'black',
        inactiveTintColor: 'darkgrey', 
        style: {backgroundColor: 'white',},
        labelStyle: {textAlign: 'center',fontSize: 15,},
        indicatorStyle: {borderBottomColor: 'black',borderBottomWidth: 2,},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Select Car',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen name="ExploreScreen" component={ExploreScreen} options={{tabBarLabel: 'Keyword',}}      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={TabStack}
        options={({route}) => ({
          headerTitle: 'India Parts',
          headerLeft: () => (<NavigationDrawerStructure navigation = {navigation}/>),
          headerStyle: {backgroundColor: 'lightblue',},            //Set Header color
          headerTintColor: 'white',                                //Set Header text color
          headerTitleStyle: {fontWeight: '600',},                  //Set Header text style
        })}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={() => ({
          headerTitle: 'Setting Screen', //Set Header Title
          headerLeft: () => (<NavigationDrawerStructure navigation={navigation} />),
          headerStyle: {backgroundColor: 'lightblue',},    //Set Header color
          headerTintColor: 'white',                     //Set Header text color
          headerTitleStyle: {fontWeight: '600', },         //Set Header text style
        })}
      />  
    </Stack.Navigator>
  );
};

export default function Test2(){
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{activeTintColor: '#e91e63', itemStyle: {marginVertical: 5},}} initialRouteName = "HomeScreenStack">
        <Drawer.Screen name="HomeScreenStack" options={{drawerLabel: 'Products'}} component={HomeScreenStack}/>
        <Drawer.Screen name="SettingScreenStack" options={{drawerLabel: 'My orders'}} component={SettingScreenStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};