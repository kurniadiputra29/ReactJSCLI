import React, {Component} from 'react';
import {StyleSheet,  ActivityIndicator, TextInput, Button} from 'react-native';
import {Container, Content, Text, View} from 'native-base';
import Navbar from "./Navbar";
import axios from 'axios';

export default class Lumen extends Component{
  state = {
    loaded: false,
    categories: [],

    form: '',
  }

  getData(){
    // fetch('http://root.localhost.run/category')
    // .then((reponse)=>reponse.json())
    // .then((reponseJson)=>{
    //   this.setState({
    //     loaded: true,
    //     categories: reponseJson,
    //   })
    // })

    axios('http://root.localhost.run/category')
    .then((responseJson)=>{
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
      alert ("Data anda sudah terinput");
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
    this.setState({loaded:false})

    axios.delete(`http://root.localhost.run/category/delete/${id}`)
    .then((res)=>{
      alert ("Data anda sudah terHapus");
      this.getData();
    })
  }

  handleInput(text){
    this.setState({
      form: text
    })
  }


  componentDidMount(){
    this.getData();
  }

  render(){
    if(this.state.loaded == false) {
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={10} color="tomato" style={{position: 'absolute'}}/>
        <ActivityIndicator size={30} color="green" style={{position: 'absolute'}}/>
        <ActivityIndicator size={60} color="grey" style={{position: 'absolute'}}/>
        <ActivityIndicator size={90} color="blue" style={{position: 'absolute'}}/>
        <ActivityIndicator size={120} color="aqua" style={{position: 'absolute'}}/>
        </View>
      );
    }

    return(
      <Container>
      <Navbar backButton={true} title="Lumen" nav={this.props.navigation}/>
        <Content>
          <View>
            {this.state.categories.map((category)=>(
              <Text style={style.body} onPress={()=>this.deleteData(category.id)}>{category.name}</Text>
            ))}
          </View>

          <TextInput
            style={{width: '100%', borderWidth: 1, borderColor: 'black'}}
            onChangeText={(text)=>this.handleInput(text)}
          />

          <Button
            title="Kirim Data"
            onPress={()=> this.sendData()}
          />
        </Content>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  title:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  body:{
    textAlign: 'center',
  },
})