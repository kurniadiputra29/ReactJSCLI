import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

export default class AddMediaTab extends Component{
  render(){
    return(
      <View style={style.container}>
        <Text>AddMediaTab</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})