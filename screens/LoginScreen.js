import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
//import Header from '../components/Header';
import { Devless } from '../components/devless';
import store from '../store'

import{Container, Content, Form, Input, Item, Button, Label} from 'native-base'
// import * as firebase from 'firebase';



class LoginScreen extends Component {

  constructor(props){
   super(props)
   this.state = {
    email: '',
    password: ''
    }
   this.postLogin = this.postLogin.bind(this)
  }

  async postLogin (navigate) {
    const res = await Devless.call('devless', 'login', ['', this.state.email, '', this.state.password])
    if (res.payload.result) {
      store.changeAuthenticated()
      return
    }
   alert('Invalid login credentials')
  }

 
  // componentDidMount(){
  //   firebase.auth().onAuthStateChanged((user)=>{
  //     if(user != null){
  //       console.log(user)
  //     }
  //   })


  // }

  // async loginWithFacebook(){
  //   const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
  //   ('363189024145856',{permissions: ['public_profile']})

  //   if(type == 'success'){
  //     const credential = firebase.auth.FacebookAuthProvider.credential(token)

  //     firebase.auth().signInWithCredential(credential).catch((error) =>{console.log(error)})
  //   }
  // }


  render() {
    const { navigate } = this.props.navigation;
    return (
            //<View>
              //<Text>This is the First login Screen</Text>
              //<Button onPress={()=>
              //  this.props.navigation.navigate('HomeScreen')}
            //    title="Go to the Home Screen"/>
          //  </View




      <Container style={styles.container}>
        <Text>FoodExpress </Text>
        <Form style={styles.container}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCorrect = {false} autoCapitalize="none" onChangeText={(email) => this.setState({email})}/>
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} autoCorrect = {false} autoCapitalize="none" onChangeText={(password) => this.setState({password})}/>
          </Item>
          <Button style={{marginTop:10}}
          full rounded success
          onPress={()=> this.postLogin(navigate)}
          >
            <Text>LOGIN</Text>
          </Button>
          <Text style = {styles.text}
          onPress={()=> this.props.navigation.navigate('VendorLogin')}
          >
            Login as Vendor
          </Text>
        </Form>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    color: 'blue',
    padding: 10
  }
});

export default LoginScreen;
