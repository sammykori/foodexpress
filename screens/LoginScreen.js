import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import{Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'
import * as firebase from 'firebase';
class LoginScreen extends Component {

//  constructor(props){
  //  super(props)

    //this.state({
      //email: '',
      //password: ''
  //  })
  //}
componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(user != null){
      console.log(user)
    }
  })


}

  async loginWithFacebook(){
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
    ('363189024145856',{permissions: ['public_profile']})

    if(type == 'success'){
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) =>{console.log(error)})
    }
  }


  render() {
    return (
      //<View>
        //<Text>This is the First login Screen</Text>
        //<Button onPress={()=>
        //  this.props.navigation.navigate('HomeScreen')}
      //    title="Go to the Home Screen"/>
    //  </View




      <Container style={styles.container}>
        <Form style={styles.container}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCorrect = {false} autoCapitalize="none"/>
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} autoCorrect = {false} autoCapitalize="none"/>
          </Item>
          <Button style={{marginTop:10}}
          full rounded success
          onPress={()=>this.props.navigation.navigate('HomeScreen')}
          >
            <Text>LOGIN</Text>
          </Button>
          <Button style={{marginTop:10}}
          full rounded primary
          onPress={()=>this.loginWithFacebook()}
          >
            <Text>login with facebook</Text>
          </Button>
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
});

export default LoginScreen;
