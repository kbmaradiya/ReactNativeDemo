import React from 'react';
import {View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OptionOneScreen from './OptionOneScreen';
import OptionTwoScreen from './OptionTwoScreen';
import OptionThreeScreen from './OptionThreeScreen';

const Drawer = createDrawerNavigator();

const SettingScreen = ({ navigation }) => {

    return (
        // <View >
        <Drawer.Navigator >
            <Drawer.Screen name="OptionOne" component={OptionOneScreen} />
            <Drawer.Screen name="OptionTwo" component={OptionTwoScreen} />
            <Drawer.Screen name="OptionThree" component={OptionThreeScreen} />
        </Drawer.Navigator>
        // </View>
    );
}

export default SettingScreen;