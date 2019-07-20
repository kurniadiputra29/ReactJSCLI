import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, View} from 'native-base';
import Navbar from "./Navbar";

export default class Detail extends Component{
  render(){
    return(
      <Container>
      <Navbar backButton={true} title="Detail" nav={this.props.navigation}/>
        <Content>
          <Text style={style.title}>Ini Detail Title</Text>
          <Text style={style.body}>Ini Detail Body</Text>
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