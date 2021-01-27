import React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the First Page of the app
          </Text>
          <Button
            title="Go to Second Sreen"
            onPress={() =>
              navigation.replace('SecondPage', {
                someParam: 'Some Param from previous Screen',
              })
            }
          />
        </View>
        <Text style={{textAlign: 'center', color: 'grey'}}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;