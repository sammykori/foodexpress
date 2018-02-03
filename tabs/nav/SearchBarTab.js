import React, {Component} from 'react';
import { StyleSheet, Text, View, Keyboard} from 'react-native';
import {Container, Content} from 'native-base'

import SearchHeader from '../SearchHeader'


class SearchBarTab extends Component {

  static navigationOptions = {
    Header: null
  }
  state ={
    searchMenu: '',
    menuData: {}
  }

  menuSearch = () => {
  //  Keyboard.dismiss()
  //  const menuName = this.state.searchMenu.toLowerCase();
    alert("search for menu")
  }

  render() {
    return (
      <Container>
        <SearchHeader
          value = {this.state.searchMenu}
          onChangeText = {(searchMenu)=>this.setState({searchMenu})}
          menuSearch ={this.menuSearch}
        />
        <Content>
          
        </Content>
        <Text>Sammy</Text>
      </Container>
    );
  }
}
export default SearchBarTab;
