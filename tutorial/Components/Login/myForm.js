import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class myForm extends Component{
	render(){
		return(
			<KeyboardAvoidingView behavior="padding" style={style.container}>
				<TextInput
					placeholder="Username"
					style={style.username}
				>
				</TextInput>
				<TextInput
					placeholder="Password"
					style={style.password}
				>
				</TextInput>
				<TouchableOpacity style={style.tombol}>
					<Text style={style.innerText}>Login</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		)  
	}
}
const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#282830',
		width: Dimensions.get('window').width, 
		alignItems: 'center',
		padding: 20,
	},
	username:{
		backgroundColor: "#fff",
		paddingVertical: 10,
		width: '100%',
		marginBottom: 20,
		paddingLeft: 10,
	},
	password:{
		backgroundColor: "#fff",
		width: '100%',
		paddingVertical: 10,
		marginBottom: 20,
		paddingLeft: 10,
	},
	tombol:{
		backgroundColor: "#27ae60",
		width: '100%',
	},
	innerText:{
		color: "#fff",
		width: '100%',
		paddingVertical: 15,
		textAlign: 'center',
		fontWeight: 'bold',
	},
})