import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HeroText extends Component{
	render(){
		return(
			<View style={style.container}>
				<Text style={style.headerText}>HeroText</Text>
			</View>
		)
	}
}
const style=StyleSheet.create({
	headerText: {
		color: '#292929',
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		padding: 10,
		fontWeight: 'bold',
		alignSelf: 'center',
		elevation: 1,
		fontSize: 25,

		shadowColor: '#000',
		shadowOffset: {width:0, height: 2},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		borderRadius: 10,
	},
})