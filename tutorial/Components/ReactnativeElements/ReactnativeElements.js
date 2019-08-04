import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Card} from 'react-native-elements';

const data =[
	{
		imageUrl: "https://via.placeholder.com/160X160",
		title: "something one"
	},
	{
		imageUrl: "https://via.placeholder.com/160X160",
		title: "something two"
	},
	{
		imageUrl: "https://via.placeholder.com/160X160",
		title: "something tree"
	},
	{
		imageUrl: "https://via.placeholder.com/160X160",
		title: "something four"
	},
	{
		imageUrl: "https://via.placeholder.com/160X160",
		title: "something five"
	},
	{
		imageUrl: "https://via.placeholder.com/160X160",
		title: "something six"
	},
];

export default class ReactnativeElements extends Component{

	constructor(props){
		super(props);
		this.state = {
			data: data
		};
	}

	render(){ 
		return(
			<FlatList
			horizontal
				data={this.state.data}
				renderItem={({item:rowData})=>{
					return(
						<Card
							style={{height: 200}}
							title={null}
							image={{uri: rowData.imageUrl }}
							containerStyle={{padding: 0, width: 160, height: 200, marginTop: 150}}
						>
						<Text style={{marginBottom: 10}}>{rowData.title}</Text>
						</Card>
					);
				}}
				keyExtractor={(item, index)=>index}
			/>
		)
	}
}

const style=StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
})
	
