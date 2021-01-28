
import * as React from 'react';
import { useState } from 'react';
import {View, Text, Button, Alert, StyleSheet, TouchableOpacity, } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker'
 
const carMakerNames = [
  {
    index: '0',
    makerName: 'Ashok Leyland',
    models: [
      {
        index: '0', 
        modelName: 'Dost', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '1', 
        modelName: 'Stile', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
    ]
  },
  {
    index: '1',
    makerName: 'Audi',
    models: [
      { 
        index: '0',
        modelName: 'A3', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L','1.8L']},
        ]
      },
      {
        index: '1',
        modelName: 'A3 (8P7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L Tdi','1.9L Tdi','2.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L Tfsi','1.4 Tfsi','1.6L','1.8L Tfsi','2.0L Tfsi']},
        ]
      },
      {
        index: '2',
        modelName: 'A3 (8V7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6 Tdi','2.0 Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4 Tfsi','1.8 Tfsi','1.8 Tfsi Quattro']},
        ]
      },
      {
        index: '3',
        modelName: 'A3 Cabriolet',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L','1.8L']}
        ]
      },
      {
        index: '4',
        modelName: 'A4 (8E2, B6)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9L Tdi','2.5L','2.5L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L/T','2.0L','2.4L','3.0 Quadro','3.0L']},
        ]
      },
      {
        index: '5',
        modelName: 'A4 (8EC, B7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9 Tdi','2.0L Tdi','2.5 Tdi','3.0 Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L','1.8L T Quattro','2.0 Tfsi Quattro','2.0L','3.0 Quattro']},
        ]
      },
      {
        index: '6',
        modelName: 'A4 (8W, B9)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L Tfsi']},
        ]
      },
      {
        index: '7',
        modelName: 'A4 (8k2, B8)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0 Tdi Quattro','2.0L Tdi','2.7L Tdi','3.0L Tdi','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L Tfsi','2.0L Tfsi Quattro','3.0L Tfsi Quattro','3.2 Fsi Quattro']},
        ]
      },
      {
        index: '8',
        modelName: 'A5',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '9',
        modelName: 'A5 Cabriolet',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '10',
        modelName: 'A6 (4F2, C6)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.0L Tdi','2.7L','2.7L Tdi Quattro','3.0L Tdi','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Tfsi','2.8L Fsi','3.0L','3.2L','3.2 Fsi Quattro','4.2L','4.2L Fsi Quattro','4.2L Quattro','5.0L RS6 Quattro']},
        ]
      },
      {
        index: '11',
        modelName: 'A6 (4G2, C7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi','3.0L Tdi','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Tfsi','2.8L Fsi Quattro','3.0L Tfsi Quattro']},
        ]
      },
      {
        index: '12',
        modelName: 'A7',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['Default']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L Tdi','1.9L Tdi','2.0 Tdi','3.0 Quattro']},
        ]
      },
      {
        index: '13',
        modelName: 'A8 (4E)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Tdi Quattro','4.2 Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.8L Fsi','3.2L Fsi Quattro','3.7L Quattro','4.2 Quattro','4.2L Fsi Quattro','6.0L W12 Quattro']},
        ]
      },
      {
        index: '14',
        modelName: 'A8 (4H)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Tdi','3.0L Tdi Quattro','4.2L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['3.0L Tfsi Quattro','4.0L Tfsi Quattro','4.2L Tfsi Quattro']},
        ]
      },
      {
        index: '15',
        modelName: 'Q3',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '16',
        modelName: 'Q3 (8U)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi','2.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4 Tfsi','2.0 Tfsi Quattro']},
        ]
      },
      {
        index: '17',
        modelName: 'Q5 (8R)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi','2.0L Tdi Quattro','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Hybrid Quattro','2.0 Tfsi Hybrid Quattro','2.0 Tfsi Quattro','3.0L Tfsi Quattro','3.2 Fsi Quattro']},
        ]
      },
      {
        index: '18',
        modelName: 'Q7 (4L)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Tdi','4.2L Tdi','6.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['3.0L Tfsi','3.6L Fsi','4.2L Fsi']},
        ]
      },
      {
        index: '19',
        modelName: 'R8',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['4.2L Fsi Quattro','5.2L Fsi Quattro']},
        ]
      },
      {
        index: '20',
        modelName: 'RS5',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['3.0L']},
        ]
      },
      {
        index: '21',
        modelName: 'S5',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['3.0L']},
        ]
      },
      {
        index: '22',
        modelName: 'TT',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Tfsi']},
        ]
      },
      {
        index: '23',
        modelName: 'TT (8J3)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L Tfsi','2.0L Tfsi','3.2L V6 Quattro']},
        ]
      },
      {
        index: '24',
        modelName: 'TT (8N3)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L T/Quadro','3.2L Vr6 Quadro']},
        ]
      },
    ]
  },
  {
    index: '2',
    makerName: 'BMW',
    models: [
      { 
        index: '0',
        modelName: '1 (F20)', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['118d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['116i 1.6L']},
        ]
      },
      {
        index: '1',
        modelName: '3 (E90)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['320i 2.0L','325i 2.5L','330i 3.0L']},
        ]
      },
      {
        index: '2',
        modelName: '3 (F30)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['320i 2.0L','328i 2.0L']},
        ]
      },
      {
        index: '3',
        modelName: '3 (F80 M3)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M3 3.0L']}
        ]
      },
      {
        index: '4',
        modelName: '3GT (F34)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320d 2.0L']},
        ]
      },
      {
        index: '5',
        modelName: '4 (F82)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M4 3.0L']},
        ]
      },
      {
        index: '6',
        modelName: '5 (E60)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['520d 2.0L','525d 3.0L','530d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['523i 2.5L','525i 2.5L','530 3.0L']},
        ]
      },
      {
        index: '7',
        modelName: '5 (F10)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['520d 3.0L','525d 2.0L','525d 3.0L','530d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['520i 2.0L','523i 2.5L','M5 4.4L']},
        ]
      },
      {
        index: '8',
        modelName: '5GT (F07)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['530d 3.0L']},
        ]
      },
      {
        index: '9',
        modelName: '6 (F06)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['640d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['M6 4.4L']},
        ]
      },
      {
        index: '10',
        modelName: '6 (F13)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M6 4.4L']},
        ]
      },
      {
        index: '11',
        modelName: '7 (F02)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['730d 3.0L','7L 3.0L Hybrid']},
        ]
      },
      {
        index: '12',
        modelName: '7 (G12)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['730d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['750Li 3.0L']},
        ]
      },
      {
        index: '13',
        modelName: 'X1 (E84)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['20d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['18i 2.0L']},
        ]
      },
      {
        index: '14',
        modelName: 'X1 (F48)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['20dx 2.0L']},
        ]
      },
      {
        index: '15',
        modelName: 'X3 (F25)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['20dx 2.0L','30dx 3.0L']},
        ]  
      },
      {
        index: '16',
        modelName: 'X5 (E70)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '17',
        modelName: 'X5 M (F85)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M 4.4L']},
        ]
      },
      {
        index: '18',
        modelName: 'X6 (E71)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['30dx 3.0L']},
        ]
      },
      {
        index: '19',
        modelName: 'X6 (F16)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['40dx 3.0L']},
        ]
      },
    ]    
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

export default class HomeScreen extends React.Component {
  state = {
    makerNameIndex: '0',
    modelNameIndex: '0',
    variantNameIndex: '0',
  }
  render(){
    
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
              modalAnimationType = 'slide'
              getLabel={item => item.makerName}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
              onValueChange={value => {
                this.setState({makerNameIndex:value.index,})
              }}
            />
          </View> 
        </View>  
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Model'}
              options={carMakerNames[this.state.makerNameIndex].models}
              modalAnimationType = 'slide'
              getLabel={item => item.modelName}            
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
              onValueChange={value => {
                this.setState({modelNameIndex:value.index,})
              }}
            />
          </View>
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Variant'}
              options={carMakerNames[this.state.makerNameIndex].models[this.state.modelNameIndex].variants}
              getLabel={item => item.variantName}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
              onValueChange={value => {
                this.setState({variantNameIndex:value.index,})
              }}
            />
          </View>
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Modification'}
              options={carMakerNames[this.state.makerNameIndex].models[this.state.modelNameIndex].variants[this.state.variantNameIndex].modifications}
              getLabel={item => item}
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
  renderHeader(){
  return (
    <View style={styles.headerFooterContainer}>
      <Text style={{fontSize: 23, fontWeight: 'bold',}}>Select Car Maker</Text>
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
