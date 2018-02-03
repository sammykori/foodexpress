const React = require('react-native');
const {StyleSheet} = React

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        marginTop: 10,
    },
    line: {
        borderColor: '#dbdbdb',
        borderWidth: 0.5,
        height: 1,
        alignSelf: 'stretch',
    },
    lcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
      },    
})
export default styles;