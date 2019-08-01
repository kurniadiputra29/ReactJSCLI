import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImages extends Component{
	render(){
		return(
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./kap.jpg')} />
                <Body>
                  <Text>KAP</Text>
                  <Text note>Asli Wonogiri</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./kap.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>          
        </Content>
		)
	}
}