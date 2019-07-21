import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Text, View, Container, Content} from 'native-base';
import Navbar from './Navbar';

export default class Detail extends Component{
  render(){
    return(
      <Container>
      <Navbar backButton={true} title="Detail" nav={this.props.navigation}/>
        <Content>
          <Text style={s.title}>Ini Detail Title</Text>
          <Text style={s.body}>Ini Detail Body</Text>
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  body: {
    textAlign: 'center',
  },
});