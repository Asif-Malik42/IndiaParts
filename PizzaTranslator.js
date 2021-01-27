import * as React from 'react'
import { Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

class PizzaTranslator extends React.Component {
  render() {
    const carMakerNames = [
      {
        makerName: 'Ashok Leyland',
        id: 1,
        models: [
          {
            modelName:'Dost',
            id: 2,
            variant: [
              {
                variantName: 'Diesel',
                id: 3,
                modification: [
                  {
                    id: 4,
                    modificationName:'1.5L'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        makerName: 'Audi',
        id: 1,
        models: [
          {
            modelName:'A3',
            id: 2,
            variant: [
              {
                variantName: 'Diesel',
                id: 3,
                modification: [
                  {
                    id: 4,
                    modificationName:'2.0L'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        makerName: 'BMW',
        id: 1,
        models: [
          {
            modelName:'X1 (E84)',
            id: 2,
            variant: [
              {
                variantName: 'Diesel',
                id: 3,
                modification: [
                  {
                    id: 4,
                    modificationName:'20d 2.0L'
                  }
                ]
              }
            ]
          }
        ]
      },
      
    ]
    const selectedCar = {
      makerName: '',
      modelName: '',
      variantName: '',
      modification: ''
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
          placeholder={'Select Car Maker'}
          options={carMakerNames}
          getLabel={item => item.makerName}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
         // footerTemplate={this.renderFooter}
          //onValueChange={value => {
            //Alert.alert('Selected Item', value ? JSON.stringify(value) : 'No item were selected!')
          //}}
        />
        <CustomPicker
          placeholder={'Model'}
          options={carMakerNames[0].models}
          getLabel={item => item.modelName}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
         // footerTemplate={this.renderFooter}
          //onValueChange={value => {
            //Alert.alert('Selected Item', value ? JSON.stringify(value) : 'No item were selected!')
          //}}
        />
      </View>
    )
  }
 
  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        <Text>Select Car Maker</Text>
      </View>
    )
  }
 
  renderFooter(action) {
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
 
  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.container}>
        <View>
          {
            // Here we put the code to update the value of selected car.
            // Initially all fields are showing default text.
            // Assign id to different part of data :::: makers.id =1, models.id =2,varients id =3 , modification.id =4
            // when makers is selected or changed rest of the fields shoud become default field
            // model is selected only when maker has already been selected.  
            
          }
          {!selectedItem && (
            <Text style={{fontSize: 22, color: 'grey'}}>{defaultText}</Text>
            //{{selectedCar.makerName = ''}}
          )}
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
 
  renderOption(settings) {
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
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    color: 'red',
    fontWeight: '500'
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
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

  }
})

export default PizzaTranslator;