import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';

export default class Home extends Component{

	toHorizontal(){
			this.props.navigation.navigate('Horizontal');
	}
	toLogin(){
		this.props.navigation.navigate('Login');
	}
	toShooping(){
		this.props.navigation.navigate('Shopping');
	}
	toGaleri(){
		this.props.navigation.navigate('Galeri');
	}
	toYoutube(){
		this.props.navigation.navigate('Youtube');
	}
	toNativebase(){
		this.props.navigation.navigate('Nativebase');
	}
	toIG(){
		this.props.navigation.navigate('IG');
	}
	toReactnativeElements(){
		this.props.navigation.navigate('ReactnativeElements');
	}
	toListItems(){
		this.props.navigation.navigate('ListItems');
	}

	render(){
		return(
			<ScrollView>
			<StatusBar backgroundColor="#007bb6" barStyle="light-content" />
			<View style={style.container}>
				<TouchableOpacity 
					style={style.buton}
					onPress={()=> this.toHorizontal()}
				>
					<Text style={style.innerText}>Horizontal</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={style.buton}
					onPress={()=>this.toLogin()}
				>
					<Text style={style.innerText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={style.buton}
					onPress={()=>this.toShooping()}
				>
					<Text style={style.innerText}>Shopping</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={style.buton}
					onPress={()=>this.toGaleri()}
				>
					<Text style={style.innerText}>Galeri</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={style.buton}
					onPress={()=>this.toYoutube()}
				>
					<Text style={style.innerText}>Youtube</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={style.buton}
					onPress={()=>this.toNativebase()}
				>
					<Text style={style.innerText}>Nativebase</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={style.buton}
					onPress={()=>this.toIG()}
				>
					<Text style={style.innerText}>IG</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={style.buton}
					onPress={()=>this.toReactnativeElements()}
				>
					<Text style={style.innerText}>ReactnativeElements</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={style.buton}
					onPress={()=>this.toListItems()}
				>
					<Text style={style.innerText}>ListItems</Text>
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