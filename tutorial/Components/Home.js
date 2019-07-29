import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

export default class Home extends Component{

	toHorizontal(){
			this.props.navigation.navigate('Horizontal');
	}

	render(){
		return(
			<ScrollView>
			<View style={style.container}>
				<TouchableOpacity 
					style={style.buton}
					onPress={()=> this.toHorizontal()}
				>
					<Text style={style.innerText}>Horizontal</Text>
				</TouchableOpacity>
			</View>
			</ScrollView>
		)
	}
}
const style = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buton:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center', 
		backgroundColor: '#007bb6',
		padding: 10,
		borderRadius: 15,
		marginTop: 20,
		width: '90%',
	},
	innerText:{
		color: 'white',
	},
})