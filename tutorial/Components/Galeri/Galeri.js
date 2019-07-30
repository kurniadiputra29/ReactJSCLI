import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './Header';
import Mid from './Mid';
import Body from './Body';

export default class Galeri extends Component{
	render(){
		return(
			<View style={style.container}>
				<Header/>
				<Mid/>
				<Body/>
			</View>
		)
	}
}

const style=StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
})
	
