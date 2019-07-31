import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Navbar from './Navbar';
import Tabbar from './Tabbar';
import Body from './Body';

import Data from './search.json';
export default class Youtube extends Component{
	render(){
		return(
			<View style={style.container}>
				<Navbar/>
				<ScrollView>
					<Body video= {Data.items[0]}/>
					<Body video= {Data.items[1]}/>
					<Body video= {Data.items[2]}/>
					<Body video= {Data.items[3]}/>
					<Body video= {Data.items[4]}/>
				</ScrollView>
				<Tabbar/>
			</View>
		)
	}
}
const style=StyleSheet.create({
	container: {
		flex: 1,
	}
})