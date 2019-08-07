import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HeaderTop extends Component{
  render(){
    return(
      <View style={style.container}>
      <StatusBar backgroundColor="#007bb6" barStyle="light-content" />
        <View style={style.left}>
          <TouchableOpacity>
          <Icon name="photo-camera" size={27}/>
          </TouchableOpacity>
        </View>
        <View style={style.tengah}>
          <Text style={style.texttengah}>Instagram</Text>
        </View>
        <View style={style.right}>
          <TouchableOpacity>
          <Icon name="near-me" size={27}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 3,
    width: Dimensions.get('window').width,
  },
  left:{

  },
  texttengah:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  right: {

  },
})