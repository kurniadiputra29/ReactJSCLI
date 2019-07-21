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
  {
    title: 'Ini Title 3',
    excerpt: 'Ini Excerpt 3',
  },
  {
    title: 'Ini Title 4',
    excerpt: 'Ini Excerpt 4',
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