import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer } from 'native-base';
import CardImages from './CardImages';
import FooterBadge from './FooterBadge';
import Sidebar from './Sidebar';

export default class Nativebase extends Component{

  closeDrawer () {
    this.drawer._root.close()
  }
  openDrawer () {
    this.drawer._root.open()
  }

	render(){
		return(
      <Drawer 
        ref={(ref) => { this.drawer = ref; }} 
        content={<Sidebar navigator={this.navigator} />} 
        onClose={() => this.closeDrawer()} > 
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=>this.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='camera' />
              </Button>
            </Right>
          </Header>
          <Content>
            <FlatList
            data={[{key: 'a'},{key: 'b'},{key: 'c'}]}
            renderItem={({item})=><CardImages/>}
            />
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <FooterBadge/>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Drawer> 
    )
	}
}

const style=StyleSheet.create({
  container:{
    flex: 1,
  }
})