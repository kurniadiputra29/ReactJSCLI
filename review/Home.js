import React, {Component} from "react";
import {StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {Text, View, Container, Content} from 'native-base';
import Navbar from './Navbar';

const articles = [
  {
    title: 'Ini Title 1',
    excerpt: 'Ini Excerpt 1',
  },
  {
    title: 'Ini Title 2',
    excerpt: 'Ini Excerpt 2',
  },
];

const lumens = [
  {
    title: 'Ini Lumen 1',
    excerpt: 'Ini Lumen Excerpt 1',
  },
  {
    title: 'Ini Lumen 2',
    excerpt: 'Ini Lumen Excerpt 2',
  },
];

export default class Home extends Component{
  keDetail(){
    this.props.navigation.navigate('Detail');
  }
  keLumen(){
    this.props.navigation.navigate('Lumen');
  }

  render(){
    return(
      <Container>
      <Navbar title="Home" nav={this.props.navigation}/>

        <Content>
        <FlatList
          data={articles}
          keyExtractor={(article, index) => index.toString() }
          renderItem={(article)=>(
            <TouchableOpacity 
              style={s.bottom}
              onPress={() => this.keDetail()}
            >
              <View style={s.article}>
                <Text style={s.title}>{article.item.title}</Text>
                <Text style={s.excerpt}>{article.item.excerpt}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={lumens}
          keyExtractor={(lumen, index) => index.toString() }
          renderItem={(lumen)=>(
            <TouchableOpacity 
              style={s.bottom}
              onPress={() => this.keLumen()}
            >
              <View style={s.article}>
                <Text style={s.title}>{lumen.item.title}</Text>
                <Text style={s.excerpt}>{lumen.item.excerpt}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  bottom:{
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
  title: {
    fontSize: 20,
  },
  excerpt: {
    textAlign: 'center',
  },
});