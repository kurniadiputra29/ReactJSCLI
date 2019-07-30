import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Mid extends Component{
	render(){
		return(
			<View style={style.mid}>
				<View style={[style.outerview, style.border]}>
					<Text style={style.textone}>75 +</Text>
					<Text style={style.texttwo}>Images</Text>
				</View>
				<View style={style.outerview}>
					<Text style={style.textone}>100K +</Text>
					<Text style={style.texttwo}>Subscribers</Text>
				</View>
			</View>
		)
	}

}

const style=StyleSheet.create({
	mid: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#cf000f',
		width: '100%',
		flexDirection: 'row',
		borderTopWidth: 8,
		borderColor: '#fff',
	},
	outerview:{
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	textone:{
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	texttwo:{
		fontSize: 15,
		color: '#fff',
	},
	border: {
		borderRightWidth: 4,
		borderColor: '#fff',
	}
})
	
