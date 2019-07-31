import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Youtube extends Component{
	render(){
		let video = this.props.video;
		return(
			<View style={style.container}>
				<Image source={{uri: video.snippet.thumbnails.medium.url}} style={{height: 200, borderRadius: 5}}/>
				<View style={style.titlecontainer}>
					<Image source={{uri: video.snippet.thumbnails.default.url}} style={style.profilepic}/>
					<View style={style.innercontainer}>
						<Text style={style.videotitle}>{video.snippet.title}</Text>
						<Text style={style.videostats}>{video.snippet.channelTitle} - 140 K Views</Text>
					</View>
				</View>
			</View>
		)
	}
}
const style= StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: '#000',
	},
	titlecontainer:{
		flexDirection: 'row',
		marginTop: 15,
		marginLeft: 10,
		paddingRight: 5,
	},
	videotitle:{
		fontSize: 12,
		color: '#fff',
		fontWeight: 'bold',
		marginRight: 4,
	},
	profilepic:{
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: '#fff',
	},
	innercontainer:{
		marginLeft: 10,
		padding: 5,
	},
	videostats:{
		fontSize: 12,
		color: '#fff',
		marginTop: 5,
	}
})