import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {StackNavigator} from 'react-navigation'

import { Auth, Home } from './router'
import {observer} from 'mobx-react'
import store from './store'
// import HomeScreen from './tabs/HomeScreen'
// import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyCW0XTQzLLLsO0jFmkotJ4z1SLMCUfu4kc",
//     authDomain: "foodexpressfb.firebaseapp.com",
//     databaseURL: "https://foodexpressfb.firebaseio.com",
//     projectId: "foodexpressfb",
//     storageBucket: "foodexpressfb.appspot.com",
// }

// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();
@observer
export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      authenticated: false
    }
  }

  changeState() {
    this.setState({authenticated: !this.state.authenticated})
  }

  render() {
    if (store.authenticated) {
      return (
        <Home />
      )
    } else {
      return <Auth />
    }
  }
}
