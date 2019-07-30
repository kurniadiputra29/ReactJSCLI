import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

export default class Header extends Component{
	render(){
		return(
			<View style={style.container}>
			<View style={style.header}>
				<Image
					source={require('./img/img1.png')}
					style={style.logo}
				/>
				<Text style={style.title}>LCO Shopping Cart</Text>
			</View>
			</View>
		)
	}
}

const style=StyleSheet.create({
	container: {
	},
	header:{
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 4,
		borderBottomColor: '#ccc',
		backgroundColor: '#fff',
		height: 80,
		width: Dimensions.get('window').width,
	},
	logo:{
		width: 40,
		height: 40,
	},
	title:{
		paddingLeft: 10,
		fontSize: 15,
		fontWeight: 'bold',
		fontStyle: 'italic',
	},
})
	
