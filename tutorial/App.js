import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HomeScreen from './Components/Home';

export default class App extends Component{
  render(){
    return(
      <HomeScreen/>
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