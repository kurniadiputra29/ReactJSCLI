import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import CompoImage from './CompoImage';

export default class Body extends Component{
	render(){
		return(
			<View style={style.container}>
				<View style={style.collum1}>
					<CompoImage imageSource={require('./img/img3.jpeg')}/>
				</View>
				<View style={style.collum2}>
					<CompoImage imageSource={require('./img/img4.jpg')}/>
				</View>
				<View style={style.full}>
					<CompoImage imageSource={require('./img/img5.jpeg')}/>
				</View>
				
				<View style={style.collum2}>
					<CompoImage imageSource={require('./img/img6.jpeg')}/>
				</View>
				<View style={style.collum1}>
					<CompoImage imageSource={require('./img/img2.jpeg')}/>
				</View>
				<View style={style.full}>
					<CompoImage imageSource={require('./img/img3.jpeg')}/>
				</View>

				<View style={style.collum1}>
					<CompoImage imageSource={require('./img/img6.jpeg')}/>
				</View>
				<View style={style.collum2}>
					<CompoImage imageSource={require('./img/img2.jpeg')}/>
				</View>
				<View style={style.full}>
					<CompoImage imageSource={require('./img/img3.jpeg')}/>
				</View>

			</View>
		)
	}
}
const style=StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5,
		backgroundColor: '#3b5998',
	},
	collum1:{
		flex: 1,
		padding: 5,
	},
	collum2:{
		flex: 3,
		padding: 5,
	},
	full:{
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
	},
})