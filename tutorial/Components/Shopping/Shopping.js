import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import HeaderScreen from './Header';
import HeroImageScreen from './HeroImage'; 
import BodyScreen from './Body';

export default class HeroImages extends Component{
	render(){
		return(
			<ScrollView style={style.container}>
				<HeaderScreen/>
				<HeroImageScreen/>
				<BodyScreen/>
			</ScrollView>
		)
	}
}
const style=StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff',
	}
})