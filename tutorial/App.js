import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './Components/Home';
import HorizontalScreen from './Components/Horizontal';
import LoginScreen from './Components/Login';

const a = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      title: "Home",
      headerStyle: {
        backgroundColor: '#007bb6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Horizontal:{
    screen: HorizontalScreen,
    navigationOptions:{
      title: "Horizontal",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  Login:{
    screen: LoginScreen,
    navigationOptions:{
      title: "Login",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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