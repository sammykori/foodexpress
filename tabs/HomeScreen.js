import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {TabNavigator} from 'react-navigation'
import{Footer, FooterTab, Button, Icon} from 'native-base'

import SearchScreen from './nav/SearchScreen'
import FavoriteScreen from './nav/FavoriteScreen'

const HomeScreen = TabNavigator({
  SearchScreen: {screen : SearchScreen},
  FavoriteScreen: {screen : FavoriteScreen}
}, {

  animationEnabled: false,
  tabBarPosition: 'bottom',
 // swipeEnabled: true,

  tabBarComponent:props =>{
    return(
      <Footer>
        <FooterTab>
          <Button
          vertical
          active ={props.navigationState.index === 0}
          onPress ={()=>props.navigation.navigate('SearchScreen')}
          >
            <Icon name = "beer"/>
            <Text>Search</Text>
          </Button>
          <Button
          vertical
          active ={props.navigationState.index === 1}
          onPress ={()=>props.navigation.navigate('FavoriteScreen')}
          >
            <Icon name= "star"/>
            <Text>Favorites</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
})
export default HomeScreen;
