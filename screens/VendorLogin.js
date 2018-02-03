import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

class VendorLogin extends Component {
  render() {
    return (
      <View>
       <Text
          onPress={()=> this.props.navigation.navigate('VendorHome')}
          >
            Login as Vendor
          </Text>

      </View>
    );
  }

}

export default VendorLogin;
