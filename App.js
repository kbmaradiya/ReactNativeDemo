/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Splash from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ForegotpasswordScreen from './src/screens/ForgotPasswordScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
    SplashScreen.hide();
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
                initialRouteName='Splash'>
                <Stack.Screen
                    name='Splash'
                    component={Splash} />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen} />
                <Stack.Screen
                    name='ForgotPassword'
                    component={ForegotpasswordScreen} />
                <Stack.Screen
                    name='SignUp'
                    component={SignUpScreen} />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;