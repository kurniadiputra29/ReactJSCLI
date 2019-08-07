import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HeaderTop from './HeaderTop';
import FooterBottom from './FooterBottom';
import Body from './Body';

export default class MainScreen extends Component{
  render(){
    return(
      <View style={style.container}>
        <HeaderTop/>
        <Body/>
        <FooterBottom/>
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