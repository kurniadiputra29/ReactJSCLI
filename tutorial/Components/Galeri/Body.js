import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

export default class Body extends Component{
	render(){
		return(
			<ScrollView>
				<View style={style.container}>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img1.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img2.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img3.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img4.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img5.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img6.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img1.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img2.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img3.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img4.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img5.jpeg')}
							style={style.myimage}
						/>
					</View>
					<View style={style.smallview}>
						<Image
							source={require('./Img/img6.jpeg')}
							style={style.myimage}
						/>
					</View>
				</View>
			</ScrollView>
		)
	}
}

const style=StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	smallview:{
		margin: 2,
		height: 100,
		width: (Dimensions.get('window').width / 2) - 4,
	},
	myimage:{
		flex: 1,
		width: null,
		alignSelf: 'stretch',
	},
})
	
