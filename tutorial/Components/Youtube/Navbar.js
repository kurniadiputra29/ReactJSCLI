import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Navbar extends Component{
	render(){
		return(
			<View style={style.container}>
				<View style={style.navbar}>
					<Image
						style={style.logo}
						source={require('./youtube.png')}
					/>
					<View style={style.moveright}>
						<TouchableOpacity>
							<Icon name="search" size={27} style={style.icons}/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon name="account-circle" size={27} style={style.icons}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const style=StyleSheet.create({
	container:{

	},
	navbar:{
		height: 55,
		backgroundColor: '#fff',
		elevation: 3,

		paddingHorizontal: 15,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	logo:{
		width: 120,
		height: 25,
	},
	moveright:{
		flexDirection: 'row',
	},
	icons:{
		paddingLeft: 15,
	},
})