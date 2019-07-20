import React, {Component} from 'react';
import {Header, Left, Icon, Title, Right, Body, Button} from 'native-base';

export default class Navbar extends Component{
	render(){
		const {nav, title, backButton} = this.props; //untuk menyingkat this props

		return(
			<Header>
	          <Left>
	          	{backButton == true
	          		? (
	          			<Button 
	          				transparent 
	          				onPress={() => nav.goBack()}
	          			>
			              <Icon name='arrow-back' />
			            </Button>
			          )
	          		:null
	          	}
	          </Left>
	          <Body>
	            <Title>{title}</Title>
	          </Body>
	          <Right>
	            <Button transparent>
	              <Icon name='menu' />
	            </Button>
	          </Right>
	        </Header>
		)
	}
}