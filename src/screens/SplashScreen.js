import React from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import {StackActions } from '@react-navigation/native';
import * as Drawables from '../resources/drawables/Drawables'


const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.dispatch(
           StackActions.replace('Login')
        );
    }, 2000);

    return (
        <View flex={1}>
            {/* <StatusBar 
            backgroundColor={Colors.primaryColor}></StatusBar> */}
            <ImageBackground
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                source={Drawables.splashScreen}
                resizeMode="stretch"
            />
        </View>
    );
};

export default Splash;