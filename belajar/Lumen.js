import React, {Component} from 'react';
import {StyleSheet,  ActivityIndicator} from 'react-native';
import {Container, Content, Text, View} from 'native-base';
import Navbar from "./Navbar";

export default class Lumen extends Component{
  state = {
    loaded: false,
    categories: [],
  }

  getData(){
    fetch('http://root81.localhost.run/category')
    .then((reponse)=>reponse.json())
    .then((reponseJson)=>{
      this.setState({
        loaded: true,
        categories: reponseJson,
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
        <ActivityIndicator size={10} color="tomato" style={{position: 'absolute'}}/>
        <ActivityIndicator size={30} color="green" style={{position: 'absolute'}}/>
        <ActivityIndicator size={60} color="grey" style={{position: 'absolute'}}/>
        <ActivityIndicator size={90} color="blue" style={{position: 'absolute'}}/>
        <ActivityIndicator size={120} color="aqua" style={{position: 'absolute'}}/>
        </View>
      );
    }

    return(
      <Container>
      <Navbar backButton={true} title="Lumen" nav={this.props.navigation}/>
        <Content>
          <View>
            {this.state.categories.map((category)=>(
              <Text style={style.body}>{category.name}</Text>
            ))}
          </View>
        </Content>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  title:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  body:{
    textAlign: 'center',
  },
})