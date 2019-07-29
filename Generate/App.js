import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity, Modal, TouchableHighlight, Alert} from 'react-native';
import {Container, Content} from 'native-base';

export default class App extends Component{
  state = {
    modalVisible: false,

    foto: "",
  };

  setModalVisible(visible) {
    this.setState({modalVisible: true, foto: visible});
  }
  setKembali(){
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  render(){
    return(
      <Container>
        <Content>
        <View>
        <Modal
          visible={this.state.modalVisible}
        >
          <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
            <View>
                <Image 
                  source={require('./assets/1.jpeg')}
                  style={{width: 300, height: 300,}}
                />
              <TouchableHighlight
                onPress={() => this.setKembali()}
                style={{ width: "100%", alignItems: "center", justifyContent: 'center'}}>
                <Text style={{fontSize: 20, marginTop: 20}}>Back</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>

        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row', }}>
          <TouchableOpacity
          onPress={() => {
            this.setModalVisible("1");
          }}>
            <Image rr
              source={require('./assets/1.jpeg')}
              style={{width: 150, height: 150, marginTop: 20,}}
            />
          </TouchableOpacity>
          <Image 
            source={require("./assets/2.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/3.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/4.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/5.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/6.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/8.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/9.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/10.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/11.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/12.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/13.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/14.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/15.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/16.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/17.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row'}}>
          <Image 
            source={require("./assets/18.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/19.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around', flexDirection: 'row', paddingBottom: 20}}>
          <Image 
            source={require("./assets/20.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
          <Image 
            source={require("./assets/21.jpeg")}
            style={{width: 150, height: 150, marginTop: 20,}}
          />
        </View>
        </Content>
      </Container>
    )
  }
}