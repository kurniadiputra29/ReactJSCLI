import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Home';
import DetailScreen from './Detail';
import LumenScreen from './Lumen';

const a = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail:{
    screen: DetailScreen
  },
  Lumen:{
    screen: LumenScreen
  }
}, {
  defaultNavigationOptions:{
    header:null,
  }
});

const AppContainer = createAppContainer(a);

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

