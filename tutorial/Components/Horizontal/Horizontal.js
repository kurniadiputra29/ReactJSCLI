import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';

export default class Horizontal extends Component{
	render(){
		return(
			<ScrollView 
				horizontal={true} 
				pagingEnabled={true} 
				style= {style.container}
			>
				<View style={style.content1}>
					<Text style={style.innerText}>Home 1</Text>
				</View>
				<View style={[style.content1, style.content2]}>
					<Text style={style.innerText}>Home 2</Text>
				</View>
				<View style={[style.content1, style.content3]}>
					<Text style={style.innerText}>Home 3</Text>
				</View>
			</ScrollView>
		)
	}
}
const style = StyleSheet.create({
	container:{
		flex: 1,
	},
	content1:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center', 
		backgroundColor: '#007bb6',
		width: Dimensions.get('window').width,
	},
	innerText:{
		fontSize: 25,
		color: '#fff',
		fontWeight: 'bold',
	},
	content2:{
		backgroundColor: '#dd4b39',
	},
	content3:{
		backgroundColor: '#27ae60',
	},
})