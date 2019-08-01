import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Headers from './Headers';
import SwipeCard from './SwipeCard';

export default class IG extends Component{
	render(){
		return(
				<View style={style.container}>
					<Headers/>
					<SwipeCard/>
				</View>
		)
	}
}
const style=StyleSheet.create({
	container:{
		flex: 1,
	},
})