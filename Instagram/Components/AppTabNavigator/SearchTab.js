import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

export default class SearchTab extends Component{
  render(){
    return(
      <View style={style.container}>
        <Text>SearchTab</Text>
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