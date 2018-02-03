import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {TabNavigator} from 'react-navigation'
import{Footer, FooterTab, Button, Icon} from 'native-base'

import OrderTab from './nav/OrderTab'
import ConfirmTab from './nav/ConfirmTab'
import RejectTab from './nav/RejectTab'

const VendorHome = TabNavigator({
  OrderTab: {screen : OrderTab},
  ConfirmTab: {screen : ConfirmTab},
  RejectTab: {screen: RejectTab}
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
          onPress ={()=>props.navigation.navigate('RejectTab')}
          >
            <Icon name = "beer"/>
            <Text>Reject</Text>
          </Button>
          <Button
          vertical
          active ={props.navigationState.index === 1}
          onPress ={()=>props.navigation.navigate('OrderTab')}
          >
            <Icon name= "star"/>
            <Text>Order</Text>
          </Button>
          <Button
          vertical
          active ={props.navigationState.index === 2}
          onPress ={()=>props.navigation.navigate('ConfirmTab')}
          >
            <Icon name= "star"/>
            <Text>Confirm</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
})
export default VendorHome;
