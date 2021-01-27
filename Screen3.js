import React, { Component } from 'react';
 
import { StyleSheet, View, Button, Text, TouchableOpacity, Alert } from 'react-native';
 
export default class Screen3 extends Component {
 
  constructor(){
 
    super();
 
    this.state={
 
      // Default Value for ButtonStateHolder State. Now the button is Enabled.
      ButtonStateHolder : false,
 
      // Default Text for Button Title.
      ButtonTitle : 'Button Enabled'
 
    }
  }
 
  ChangeButtonFunction =()=>{
    
      this.setState({
        
        // On State True it will Disable the button.
        ButtonStateHolder : !this.state.ButtonStateHolder ,
 
        ButtonTitle : this.state.ButtonStateHolder?'Button Enabled':'Button Disabled'
      
      })
    
   }
 
   SampleButtonFunction=()=>
   {
 
      Alert.alert('Button Clicked') ;
 
   }
 
  render() {
    return (
   
      <View style={styles.MainContainer} >
 
        <TouchableOpacity style={[styles.ButtonStyle, { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#009688' }]} 
          activeOpacity = { .5 } 
          disabled={this.state.ButtonStateHolder}
          onPress={this.SampleButtonFunction} >
 
            <Text style={styles.TextStyle}> {this.state.ButtonTitle} </Text>
 
        </TouchableOpacity>
 
        <Button title='Change Above Button' onPress={this.ChangeButtonFunction} disabled = {false}/>
 
 
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
 
  ButtonStyle: {
    
       paddingTop:10,
       paddingBottom:10,
       borderRadius:5,
       marginBottom: 20,
       width: '70%'
     },
    
     TextStyle:{
         color:'#fff',
         textAlign:'center',
     }
 
});