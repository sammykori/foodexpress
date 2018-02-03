import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from '../themes/theme';

class Header extends Component{
    render(){
        return(
            <View>
                <View style = {styles.container}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style = {styles.line}></View>
            </View>
        );
    }
}
export default Header;