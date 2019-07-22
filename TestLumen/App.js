import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default class App extends Component{

  state = {
    loaded: false,
    categories: [],
  }

  getData(){
    fetch('http://root1.localhost.run/category')
    .then( (response)=>response.json() )
    .then( (responseJson) => {
      this.setState({
        loaded: true,
        categories: responseJson,
      })
    })
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    if(this.state.loaded == false) {
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={10} color="grey" style={{position: 'absolute'}}/>
        <ActivityIndicator size={40} color="red" style={{position: 'absolute'}}/>
        <ActivityIndicator size={60} color="#ooc" style={{position: 'absolute'}}/>
        <ActivityIndicator size={90} color="blue" style={{position: 'absolute'}}/>
        <ActivityIndicator size={140} color="marron" style={{position: 'absolute'}}/>
        </View>
      );
    }

    return(
      <View>
        {this.state.categories.map((category)=>(
          <Text>{category.name}</Text>
        ))}
      </View>
    )
  }
}