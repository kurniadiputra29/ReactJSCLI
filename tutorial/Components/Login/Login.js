import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MyFormScreen from './myForm';

export default class Login extends Component{
	render(){
		return(
			<View style={style.container}>
				<View style={style.mylogo}>
					<Image
						source={require('./Images/icon.png')}
						style={style.logo}
					/>
					<Text style={style.title}>A simple Login App</Text>
				</View>
				<View style={style.myform}>
					<MyFormScreen/>
				</View>
			</View>
		)  
	}
}
const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#282830',
		width: Dimensions.get('window').width,
	},
	mylogo:{
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo:{
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	title:{
		color: "#fff",
		marginTop: 10,
	},
	myform:{
		flex: 2,
	},
})