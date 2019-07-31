import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Tabbar extends Component{
	render(){
		return(
			<View style={style.tabbar}>
				<TouchableOpacity style={style.button}>
					<Icon name="home" size={25}/>
					<Text style={style.mytext}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.button}>
					<Icon name="whatshot" size={25}/>
					<Text style={style.mytext}>WatsHot</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.button}>
					<Icon name="subscriptions" size={25}/>
					<Text style={style.mytext}>Subscriptions</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.button}>
					<Icon name="add-alert" size={25}/>
					<Text style={style.mytext}>Activity</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.button}>
					<Icon name="folder" size={25}/>
					<Text style={style.mytext}>Account</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const style=StyleSheet.create({
	tabbar:{
		backgroundColor: '#fff',
		height: 60,
		borderTopWidth: 2,
		borderColor: '#e5e5e5',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	button:{
		justifyContent: 'center',
		alignItems: 'center',
	},
	mytext:{
		fontSize: 14,
		textAlign: 'center',
		paddingTop: 2,
		color: 'rgb(50,50,50)',
	},
})