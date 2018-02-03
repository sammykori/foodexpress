import React, {Component} from 'react';
import { StyleSheet, Text, View, Keyboard} from 'react-native';

import {TabNavigator} from 'react-navigation'
import {Header, FooterTab, Button, Icon} from 'native-base'

import SearchBarTab from './SearchBarTab'
import CatTab from './CatTab'
import VendTab from './VendTab'


const SearchScreen = TabNavigator({
  SearchBarTab: {screen: SearchBarTab},
  CatTab: {screen: CatTab},
  VendTab: {screen: VendTab}
}, {
  
  animatioEnabled: true,
 // swipeEnabled: true,
  tabBarPosition: 'top',

  tabBarComponent:props =>{
    return(
      <Header>
        <FooterTab>
          <Button
          vertical
          active ={props.navigationState.index === 0}
          onPress ={()=>props.navigation.navigate('SearchBarTab')}
          >
            <Icon name = "eye"/>
            <Text>SearchBar</Text>
          </Button>
          <Button
          vertical
          active ={props.navigationState.index === 1}
          onPress ={()=>props.navigation.navigate('CatTab')}
          >
            <Icon name= "pizza"/>
            <Text>Category</Text>
          </Button>
          <Button
          vertical
          active ={props.navigationState.index === 2}
          onPress ={()=>props.navigation.navigate('VendTab')}
          >
            <Icon name= "flame"/>
            <Text>Vendor</Text>
          </Button>
        </FooterTab>

      </Header>
    )
  }
})
export default SearchScreen;
