import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, Dimensions} from 'react-native';

export default class Header extends Component{
	render(){
		return(
			<ImageBackground 
				style={style.headerbg}
				source={require('./Img/headerbg.jpeg')}
			>
				<View style={style.headercontainer}>
					<View style={style.profilepiccontainer}>
						<Image 
							source={require('./Img/profilepic.jpeg')}
							style={style.mypic}
						/>
					</View>
					<Text style={style.name}>Kurniadi Putra</Text>
					<Text style={style.job}>Asli Wong Wonogiri</Text>
				</View>
			</ImageBackground>
		)

	}

}

const style=StyleSheet.create({
	headerbg: {
		width: null,
		alignSelf: 'stretch',
	},
	headercontainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 130,
		paddingBottom: 130,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	profilepiccontainer:{
		width: 180,
		height: 180,
		borderRadius: 90,
		borderWidth: 13,
		borderColor: 'rgba(0,0,0,0.4)',
	},
	mypic:{
		flex: 1,
		width: null,
		alignSelf: 'stretch',
		borderRadius: 90,
		borderWidth: 3,
		borderColor: '#fff',
	},
	name:{
		color: '#fff',
		marginTop: 10,
		fontSize: 18,
		fontWeight: 'bold',
	},
	job:{
		color: '#fff',
		fontSize: 13,
		fontStyle: 'italic',
	},
})
	
