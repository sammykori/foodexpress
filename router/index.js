import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../tabs/HomeScreen'
import VendorLogin from '../screens/VendorLogin'
import VendorHome from '../tabs/VendorHome'

export const Auth = StackNavigator({
    Login: {screen: LoginScreen},
    VendorLogin: {screen: VendorLogin},
    VendorHome: {screen: VendorHome}

})

export const Home = StackNavigator({
    HomeScreen: {screen: HomeScreen}
})