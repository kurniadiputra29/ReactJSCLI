import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class CompoImage extends Component{
	render(){
		return(
				<Image
					source={this.props.imageSource}
					style={style.image}
				/>
		)
	}
}
const style=StyleSheet.create({
	image:{
		height: 200,
		width: '100%',
		alignItems: 'center', 
		justifyContent: 'center',
	},
})