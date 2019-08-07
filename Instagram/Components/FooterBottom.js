import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FooterBottom extends Component{

  AddMediaTab(){
      this.props.navigation.navigate('AddMediaTab');
  }

  render(){
    return(
      <View style={style.container}>
        <View style={style.left}>
          <TouchableOpacity
            onPress={()=> this.AddMediaTab()}
          >
          <Icon name="add-box" size={27}/>
          </TouchableOpacity>
        </View>
        <View style={style.left}>
          <TouchableOpacity>
          <Icon name="home" size={27}/>
          </TouchableOpacity>
        </View>
        <View style={style.left}>
          <TouchableOpacity>
          <Icon name="account-circle" size={27}/>
          </TouchableOpacity>
        </View>
        <View style={style.left}>
          <TouchableOpacity>
          <Icon name="add-alert" size={27}/>
          </TouchableOpacity>
        </View>
        <View style={style.right}>
          <TouchableOpacity>
          <Icon name="search" size={27}/>
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