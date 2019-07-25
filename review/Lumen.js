import React, {Component} from "react";
import {StyleSheet, ActivityIndicator, TextInput, Button, Icon} from "react-native";
import {Text, View, Container, Content} from 'native-base';
import Navbar from './Navbar';
import axios from 'axios';

export default class Lumen extends Component{

  state = {
    loaded: false,
    categories: [],

    form: '',
  }

  getData(){
    // fetch('http://root5.localhost.run/category')
    // .then((response)=>response.json())
    // .then((responseJson)=>{
    //   this.setState({
    //     loaded: true,
    //     categories: responseJson,
    //   })
    // })
  
    axios.get('http://root9.localhost.run/category')
    .then((responseJson)=>{
      this.setState({
        loaded: true,
        categories: responseJson.data,
      })
    })
  }

  sendData(){
    let dataKirim = {
      name: this.state.form
    }
    axios.post('http://root9.localhost.run/category/create', dataKirim)
    .then((response)=>{
      let hasil = JSON.stringify(response.data);
      alert ("Data anda berhasil di Input !");
      this.getData();
    })
    .then(()=>{
      this.setState({loaded:true})
    })
    .catch((error)=>{
      let hasil = JSON.stringify(error);
      alert(hasil);
    })
  }

  deleteData(id){
    axios.delete(`http://root9.localhost.run/category/delete/${id}`)
    .then((res)=>{
      alert ("Data anda berhasil di Hapus !");
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
    if(this.state.loaded == false ){
      return(
        <Container>
          <Content>
            <ActivityIndicator size={70} color="#oof"/>
          </Content>
        </Container>
      );
    }

    return(
      <Container>
      <Navbar backButton={true} title="Lumen" nav={this.props.navigation}/>
        <Content>
          {this.state.categories.map((category)=>(
            <View>
            <Text style={s.name}>{category.name}</Text>
            <Button
              title="Edit"
              color="#1D702D"
            />
            <Button
              title="Hapus"
              color="#f40d42"
              onPress={()=>this.deleteData(category.id)}
            />
            </View>
          ))}

          <TextInput
            style={{width:'100%', borderWidth: 1, borderColor: 'black'}}
            onChangeText={(text)=>this.handleInput(text)}
          />

          <Button
            title="Submit"
            onPress={()=>this.sendData()}
          />
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  name: {
    fontSize: 15,
    textAlign: 'center',
  },
});