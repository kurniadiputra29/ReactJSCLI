import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TextInput, Button} from 'react-native';
import axios from 'axios';

export default class App extends Component{

  state = {
    loaded: false,
    categories: [],

    form: ''
  }

  getData(){
    // fetch('http://root.localhost.run/category')
    // .then( (response)=>response.json() )
    // .then( (responseJson) => {
    //   this.setState({
    //     loaded: true,
    //     categories: responseJson,  
    //   })
    // })

    axios.get('http://root.localhost.run/category')
    .then( (responseJson) => {
      this.setState({
        loaded: true,
        categories: responseJson.data,  
      })
    })
  }

  sendData(){
    this.setState({loaded:false})

    let dataKirim = {
      name: this.state.form
    }

    axios.post('http://root.localhost.run/category/create', dataKirim)
    .then((response)=>{
      let hasil = JSON.stringify(response.data);
      alert ('Input anda berhasil');
      this.getData();
    })
    .then(()=>{
      this.setState({loaded:true})
    })
    .catch((error) => {
      let hasil = JSON.stringify(error);
      alert(hasil);
    })
  }


  deleteData(id){
    this.setState({loaded:false});

    axios.delete(`http://root.localhost.run/category/delete/${id}`)
    .then((res)=>{
      // alert(JSON.stringify(res.data));
      alert('Data anda telah terhapus !!');
      this.getData();
    })
  }

  handleInput(text){
    this.setState({
      form: text
    })
  }

  gambarLoading(){
    if(this.state.loaded == false) {
      return(
        <View style={{width: '100%', height: '100%', flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={10} color="grey" style={{position: 'absolute'}}/>
        <ActivityIndicator size={40} color="red" style={{position: 'absolute'}}/>
        <ActivityIndicator size={60} color="#ooc" style={{position: 'absolute'}}/>
        <ActivityIndicator size={90} color="blue" style={{position: 'absolute'}}/>
        <ActivityIndicator size={140} color="marron" style={{position: 'absolute'}}/>
        </View>
      );
    }
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    

    return(
      <View style={{flex: 1,}}>


        {this.state.categories.map((category)=>(
          <Text style={{textAlign: 'center'}} onPress={()=>this.deleteData(category.id)}>{category.name}</Text>
        ))}

        <TextInput 
          style={{width: '100%', borderWidth: 1, borderColor: 'black'}}
          onChangeText={(text)=>this.handleInput(text)}
        />

        <Button
          title="Kirim Data"
          onPress={()=> this.sendData()}
        />
        {this.gambarLoading()}
      </View>
    )
  }
}