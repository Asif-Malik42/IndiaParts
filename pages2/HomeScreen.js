
/*

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      
    </SafeAreaView>
  );
};

export default HomeScreen;
*/
import * as React from 'react';
import { useState } from 'react';
import {View, Text, Button, Alert, StyleSheet, TouchableOpacity, } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker'
 
const carMakerNames = [
  {
    makerName: 'Ashok Leyland',
    index: '0',
    models: [
      {
        modelName: 'Dost',
        index: '0',
        variants: [
          {
            variantName: 'Diesel',
            index:'0',
            modifications: ['1.5L']
          }
        ]
      }
    ]
  },
  {
    makerName: 'Audi',
    value: 2
  },
  {
    makerName: 'BMW',
    value: 3
  },
  {
    makerName: 'Chevrolet',
    value: 4
  },
  {
    makerName: 'Datsun',
    value: 5
  },
  {
    makerName: 'Daweoo',
    value: 6
  },
  {
    makerName: 'Fiat',
    value: 7
  },
  {
    makerName: 'Ford',
    value: 8
  },
  {
    makerName: 'Honda',
    value: 9
  },
  {
    makerName: 'Hyundai',
    value: 10
  },
  {
    makerName: 'Isuzu',
    value: 11
  },
  {
    makerName: 'Mahindra',
    value: 12
  },
  {
    makerName: 'Maruti Suzuki',
    value: 13
  },
  {
    makerName: 'Mercedes Benz',
    value: 14
  },
  {
    makerName: 'Nissan',
    value: 15
  },
  {
    makerName: 'Renault',
    value: 16
  },
  {
    makerName: 'Skoda',
    value: 17
  },
  {
    makerName: 'Tata',
    value: 18
  },
  {
    makerName: 'Toyota',
    value: 19
  },
  {
    makerName: 'Vokswagon',
    value: 20
  },
  {
    makerName: 'Volvo',
    value: 21
  }
]

const selectedCarInitialState = {
  makerName: '',
  makerNameIndex: '',
  model: '',
  variant: '',
  modification: '',
}

export default class HomeScreen extends React.Component {
  render(){
    
    //const [selectedCar,setSelectedCar] = useState(selectedCarInitialState);

    return (
      <View style={styles.mainContainer}>
      <View style={styles.mainSubContainer}>
        <View style={{flex: 1, width: '100%', }}>
          <View style={styles.headerContainer}>
            <Text style = {{fontSize: 18, paddingLeft:10, color:'grey'}} >Search spare parts by car</Text>
          </View>  
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Car Maker'}
              options={carMakerNames}
              getLabel={item => {selectedCarInitialState.makerNameIndex = item.index; return item.makerName}}
              //onValueChange = {(item)=>setSelectedCar({...SelectedCar,makerName: item.label})}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
            />
          </View> 
        </View>  
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Model'}
              options={carMakerNames[0].models}
                getLabel={item => item.modelName}            fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
            />
          </View>
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Variant'}
              options={carMakerNames}
              getLabel={item => item.makerName}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
            />
          </View>
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Modification'}
              options={carMakerNames}
              getLabel={item => item.makerName}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
            />
          </View>
        </View>
        <View style={styles.searchButtonContainer}>
          <Button
            title = "search"
            color = 'black'
            onPress = {()=>{Alert.alert('Please Confirm!!')}}
          />     
        </View>    
      </View>
    </View>
    )
  }

  renderHeader(){
  return (
    <View style={styles.headerFooterContainer}>
      <Text style={{fontSize: 23, fontWeight: 'bold',}}>Select Car Maker</Text>
    </View>
  )
  }
  renderFooter(action){
  return (
    <TouchableOpacity
      style={styles.headerFooterContainer}
      onPress={() => {
        Alert.alert('Footer', "You've click the footer!", [
          {
            text: 'OK'
          },
          {
            text: 'Close Dropdown',
            onPress: action.close.bind(this)
          }
        ])
      }}
    >
      <Text>This is footer, click me!</Text>
    </TouchableOpacity>
  )
  }
  renderField(settings){
  const { selectedItem, defaultText, getLabel, clear } = settings
  return (
    <View >
      <View>
        {!selectedItem && <Text style={{fontSize: 18, color: 'grey',marginLeft: 10}}>{defaultText}</Text>}
        {selectedItem && (
          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.clearButton} onPress={clear}>
              <Text style={{ color: '#fff' }}>Clear</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              {getLabel(selectedItem)}
            </Text>
          </View>
        )}
      </View>
    </View>
  )
  }
  renderOption(settings){
  const { item, getLabel } = settings
  return (
    <View style={styles.optionContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.optionCircle} />
        <Text style={{fontSize: 22, alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
      </View>
    </View>
  )
  }
}
  

const styles = StyleSheet.create({
  innerContainer: {
    //container for fieldName before search
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  text: {
    //text of the search field      
    fontSize: 22,
    color: 'red',
    fontWeight: '500'
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:'gray',
  },
  clearButton: {
    backgroundColor: 'grey', 
    borderRadius: 5, 
    marginRight: 10, 
    padding: 5 
  },
  optionContainer: {
    padding: 10,
    //borderBottomColor: 'grey',
    //borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  optionCircle: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 2,
    borderRadius:10,
    borderColor: 'blue'

  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'#06d6a0',
    backgroundColor:'lightblue'
  },
  mainSubContainer: {
    //flex: 1,
    width: '88%',
    height: '60%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop:'10%',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderBottomColor:'darkgray',
    
  },
  searchFieldContainer: {
    flex: 1,
    margin: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor:'#06d6a0',
  },
  searchButtonContainer: {
    flex: 1.5,
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    }
})
