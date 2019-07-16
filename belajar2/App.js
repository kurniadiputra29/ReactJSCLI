import React, {Component} from 'react';
import {View, Text, ScrollView, Button, TouchableWithoutFeedback, FlatList} from 'react-native';
let todos = [
  {
    title: 'Mau Tidur',
    desc: 'Saya Mau Tidur, Tapi Bohong :v :v',
  },
  {
    title: 'Mau Makan',
    desc: 'Saya Mau Makan, Tapi Bohong :v :v',
  },
  {
    title: 'Mau Nyuci',
    desc: 'Saya Mau Nyuci, Tapi Bohong :v :v',
  },
];

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
        {/*Perulangan menggunakan map*/}
        {todos.map((todo, index)=>(
          <View key={index}>
            <Text>{index}</Text>
            <Text>{todo.title}</Text>
            <Text>{todo.desc}</Text>
          </View>
        ))}
        {/*Perulangan menggunakan FlatList*/}
        <FlatList
          data={todos}
          keyExtractor={(todo, index)=> index.toString()}
          renderItem={(todo)=>(
            <View>
            <Text>{todo.item.title}</Text>
            <Text>{todo.item.desc}</Text>
            </View>
          )}
        />        
      </View>

    );
  }
}