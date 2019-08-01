import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Left, Body, Right, Icon, Button, Title} from 'native-base';

export default class Headers extends Component{
	render(){
		return(
				<Header>
					<Left>
						<Button transparent>
							<Icon name='menu'/>
						</Button>						
					</Left>
					<Body>
						<Title>Tinder Cards</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='camera'/>
						</Button>
					</Right>
				</Header>
		)
	}
}