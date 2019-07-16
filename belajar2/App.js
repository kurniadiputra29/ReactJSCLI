import React, {Component} from 'react';
import {View, Text, ScrollView, Button, TouchableWithoutFeedback} from 'react-native';

export default class App extends Component{
  state = {
    content: "",
    toogle: false,
  };

  handleToogle(a){
    this.setState({
      toogle: !this.state.toogle
    });
  }
  handleSentuhan(arg){
    this.setState({
      content: arg
    });
  }
  render(){
    return (
      
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Text>{this.state.content}</Text>
      <Button 
        onPress={ () => this.handleSentuhan('ini percobaan button')}
        title="Cek Button"
        color="#841584"
      >
      </Button>
      <TouchableWithoutFeedback 
        onPress={ () => this.handleToogle()}
      >
        <View style={{backgroundColor: this.state.toogle ? 'lime' : 'aqua'}}>
          <Text>tOOGLE</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>

    );
  }
}