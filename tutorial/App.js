import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './Components/Home';
import HorizontalScreen from './Components/Horizontal/Horizontal';
import LoginScreen from './Components/Login/Login';
import ShoppingScreen from './Components/Shopping/Shopping';
import GaleriScreen from './Components/Galeri/Galeri';
import YoutubeScreen from './Components/Youtube/Youtube';
import NativebaseScreen from './Components/NativeBase/Nativebase';
import IGScreen from './Components/IG/IG';
import ReactnativeElements from './Components/ReactnativeElements/ReactnativeElements';
import ListItems from './Components/ListItems/ListItems';

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
  Shopping: {
    screen: ShoppingScreen,
    navigationOptions:{
      header: null
    }
  },
  Galeri:{
    screen: GaleriScreen,
    navigationOptions:{
      title: "Galeri",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Youtube:{
    screen: YoutubeScreen,
    navigationOptions:{
      header: null
    }
  },
  Nativebase:{
    screen: NativebaseScreen,
    navigationOptions:{
      header: null
    }
  },
  IG: {
    screen: IGScreen,
    navigationOptions:{
      header: null
    }
  },
  ReactnativeElements:{
    screen: ReactnativeElements,
    navigationOptions:{
      title: "ReactnativeElements",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  ListItems:{
    screen: ListItems,
    navigationOptions:{
      title: "ListItems",
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