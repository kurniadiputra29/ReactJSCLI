import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './Components/Home';
import HorizontalScreen from './Components/Horizontal';

const a = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      title: "Home",
    }
  },
  Horizontal:{
    screen: HorizontalScreen,
    navigationOptions:{
      title: "Horizontal",
    }
  },
})

const AppContainer = createAppContainer(a);

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
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