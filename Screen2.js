import * as React from 'react';
import {
  View,
  Text, 
  Button, 
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CustomPicker } from 'react-native-custom-picker'


  
  
  
 
 

export default class Screen2 extends React.Component {
  render() {
    // Make these entries an array of names rather than array of objects.
  const carMakerNames = [
    {
      label: 'Ashok Leyland',
      value: 1
    },
    {
      label: 'Audi',
      value: 2
    },
    {
      label: 'BMW',
      value: 3
    },
    {
      label: 'Chevrolet',
      value: 4
    },
    {
      label: 'Datsun',
      value: 5
    },
    {
      label: 'Daweoo',
      value: 6
    },
    {
      label: 'Fiat',
      value: 7
    },
    {
      label: 'Ford',
      value: 8
    },
    {
      label: 'Honda',
      value: 9
    },
    {
      label: 'Hyundai',
      value: 10
    },
    {
      label: 'Isuzu',
      value: 11
    },
    {
      label: 'Mahindra',
      value: 12
    },
    {
      label: 'Maruti Suzuki',
      value: 13
    },
    {
      label: 'Mercedes Benz',
      value: 14
    },
    {
      label: 'Nissan',
      value: 15
    },
    {
      label: 'Renault',
      value: 16
    },
    {
      label: 'Skoda',
      value: 17
    },
    {
      label: 'Tata',
      value: 18
    },
    {
      label: 'Toyota',
      value: 19
    },
    {
      label: 'Vokswagon',
      value: 20
    },
    {
      label: 'Volvo',
      value: 21
    }
  ]
    return (
      <View style={styles.mainContainer}>
        <View style={styles.mainSubContainer}>
          <View style={{flex: 1, width: '100%', }}>
            <View style={styles.headerContainer}>
              <Text style = {{fontSize: 18, paddingLeft:10, color:'grey'}} >Search spare parts by car</Text>
            </View>  
          </View>
          <View style={styles.searchFieldContainer}>
            {
              /*
              I initially thought of making a component for picker
              But there were some errors so sticking to this way for now!!

              :::attempt:::
              <CarSelection name ='Select the Car Maker'/>
              */
            }
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
              <CustomPicker
                placeholder={'Select the Car Maker'}
                options={carMakerNames}
                getLabel={item => item.label}
                fieldTemplate={this.renderField}
                optionTemplate={this.renderOption}
                headerTemplate={this.renderHeader}
                // footerTemplate={this.renderFooter}
                //onValueChange={value => {
                //Alert.alert('Selected Item', value ? JSON.stringify(value) : 'No item were selected!')
                //}}
              />
            </View> 
          </View>  
          <View style={styles.searchFieldContainer}>

          </View>
          <View style={styles.searchFieldContainer}>

          </View>
          <View style={styles.searchFieldContainer}>

          </View>
          <View style={styles.searchButtonContainer}>
            <Button
              title = "search"
             // color = 'black'
              onPress = {()=>{Alert.alert('Please Confirm!!')}}
              titleProps ={{fontWeight:'bold',fontSize:20}}
              type = 'clear'
              raised = {true}
            />     
          </View>    
        </View>
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
      <View >
        <View>
          {!selectedItem && <Text style={{fontSize: 22, color: 'grey'}}>{defaultText}</Text>}
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
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
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

  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#06d6a0',
  },
  mainSubContainer: {
    //flex: 1,
    width: '88%',
    height: '50%',
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