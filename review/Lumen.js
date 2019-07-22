import React, {Component} from "react";
import {StyleSheet, ActivityIndicator} from "react-native";
import {Text, View, Container, Content} from 'native-base';
import Navbar from './Navbar';

export default class Lumen extends Component{

  state = {
    loaded: false,
    categories: [],
  }

  getData(){
    fetch('http://root9.localhost.run/category')
    .then((response)=>response.json())
    .then((responseJson)=>{
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
    if(this.state.loaded == false ){
      return(
        <Container>
          <Content>
            <ActivityIndicator size={70} color="#oof"/>
          </Content>
        </Container>
      );
    }

    return(
      <Container>
      <Navbar backButton={true} title="Lumen" nav={this.props.navigation}/>
        <Content>
          {this.state.categories.map((category)=>(
            <Text style={s.name}>{category.name}</Text>
          ))}
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});