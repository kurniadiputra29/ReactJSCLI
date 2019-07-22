import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "./Home";
import DetailScreen from "./Detail";
import LumenScreen from "./Lumen";

const a = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  },
  Lumen:{
    screen: LumenScreen
  }
}, {
  defaultNavigationOptions:{
    header: null,
  }
});// ini untuk menghilangkan header bawaan yang di miliki react navigation

const AppContainer = createAppContainer(a);

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}