import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import { users } from './datasource/data';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default class ListItems extends Component{
	render(){
		return(
			<ScrollView>
			  {
			    users.map((user, i) => (
			    	<TouchableOpacity>
			      <ListItem
			        key={i}
			        leftAvatar={{ source: { uri: user.picture.thumbnail } }}
			        title={`${user.name.first.toUpperCase()}`}
			        subtitle={user.email}
			      />
			      </TouchableOpacity>
			    ))
			  }
			</ScrollView>
		);
	}
}


	
