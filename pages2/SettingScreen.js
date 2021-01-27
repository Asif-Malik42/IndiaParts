// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

export default class SettingScreen extends React.Component {
  render() {
    return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 16,}}>
            Setting Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )  
};
}
