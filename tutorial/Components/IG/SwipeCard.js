import React, {Component} from 'react';
import {Image} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button} from 'native-base';

const datas = [
	
	{
		text: 'Card One',
		name: 'One',
		image: require('./img/img1.jpeg')
	},
	{
		text: 'Card Two',
		name: 'Two',
		image: require('./img/img2.jpeg')
	},
	{
		text: 'Card Three',
		name: 'Three',
		image: require('./img/img3.jpeg')
	},
	{
		text: 'Card Four',
		name: 'Four',
		image: require('./img/img4.jpeg')
	},

];

export default class SwipeCard extends Component{

	state ={
    click: false,
  };
  handleClick(){
    this.setState({
      click: !this.state.click
    });
  }

	render(){
		return(
				<DeckSwiper
					dataSource={datas}
					renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Activity</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                	<Button transparent onPress={()=>this.handleClick()}>
                  	<Icon name="heart" style={{ color: this.state.click ? 'red' : 'black' }} />
                  </Button>
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
				/>
		)
	}
}