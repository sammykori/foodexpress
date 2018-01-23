import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './tabs/HomeScreen'
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCW0XTQzLLLsO0jFmkotJ4z1SLMCUfu4kc",
    authDomain: "foodexpressfb.firebaseapp.com",
    databaseURL: "https://foodexpressfb.firebaseio.com",
    projectId: "foodexpressfb",
    storageBucket: "foodexpressfb.appspot.com",
}

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
const AppNavigator = StackNavigator({
  LoginScreen:{screen : LoginScreen},
  HomeScreen:{screen : HomeScreen}
},{
  initialRouteName: 'LoginScreen'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
