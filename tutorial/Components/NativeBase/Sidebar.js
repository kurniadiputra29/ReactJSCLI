import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Button } from 'native-base';

export default class Sidebar extends Component{

	render(){
		return(
      <View style={style.container}>
      <ScrollView style={style.scroll}>
        <View style={style.container}>
				<Text style={style.text}>Side Menu</Text>
        <Image style={style.topImage} source={require('./kap.jpg')}/>
        <Button style={style.button} block ligh >
            <Text>Light</Text>
          </Button>
          <Button style={style.button} block>
            <Text>Primary</Text>
          </Button>
          <Button style={style.button} block success>
            <Text>Success</Text>
          </Button>
          <Button style={style.button} block info>
            <Text>Info</Text>
          </Button>
          <Button style={style.button} block warning>
            <Text>Warning</Text>
          </Button>
          <Button style={style.button} block danger>
            <Text>Danger</Text>
          </Button>
          </View>
		  </ScrollView>
      </View>
    )
	}
}

const style=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#c1c1c1',
    marginRight: 5,
    alignItems: 'center',
  },
  scroll:{
    width: '100%',
  },
  text:{
    color: '#fff',
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
  },
  topImage:{
    width: '95%',
    height: 150,
    opacity: 0.8,
  },
  button:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
})
