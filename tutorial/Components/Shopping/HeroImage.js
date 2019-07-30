import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import HeroText from './HeroText';

export default class HeroImage extends Component{
	render(){
		return(
			<View style={style.container}>
				<ImageBackground
					source={require('./img/img2.jpeg')}
					style={style.hero}
				>
					<HeroText/>
				</ImageBackground>
			</View>
		)
	}
}
const style=StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center', 
	},
	hero:{
		height: 250,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	}
})