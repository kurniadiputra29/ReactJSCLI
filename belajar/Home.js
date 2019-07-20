import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, View} from 'native-base';
import Navbar from "./Navbar";
const articles = [
  {
    title: 'Ini Title 1', 
    excerpt: 'Ini Excerpt 1'
  },
  {
    title: 'Ini Title 2', 
    excerpt: 'Ini Excerpt 2'
  },
  {
    title: 'Ini Title 3', 
    excerpt: 'Ini Excerpt 3'
  },
  {
    title: 'Ini Title 4', 
    excerpt: 'Ini Excerpt 4'
  },
];

export default class Home extends Component{
  keDetail(){
    this.props.navigation.navigate('Detail');
  }

  render(){
    return(
      <Container>
      <Navbar title="Home" nav={this.props.navigation}/>
        <Content>
        <FlatList
          data={articles}
          keyExtractor={(article, index) => index.toString()}
          renderItem={(article) => (
            <TouchableOpacity 
              style={style.button}
              onPress={() => this.keDetail()}
            >
            <View style={style.article}>
              <Text style={style.title}>{article.item.title}</Text>
              <Text style={style.excerpt}>{article.item.excerpt}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
        </Content>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  article:{
    padding: 10,
    width: '95%',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
  },
  excerpt:{
    textAlign: 'center',
  },
})