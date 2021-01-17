import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HistoryScreen from './HistoryScreen';
import SettingScreen from './SettingScreen';
import StationScreen from './StationScreen';

import * as Drawable from '../resources/drawables/Drawables';

const Tab = createBottomTabNavigator();



const HomeScreen = ({ navigation }) => {

    return (
        
            <Tab.Navigator
                screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName
                            if (route.name === 'Station') {
                                iconName = focused ? Drawable.stationSelected : Drawable.station;
                            } else if (route.name === 'History') {
                                iconName = focused ? Drawable.historySelected : Drawable.history;
                            } else {
                                iconName = focused ? Drawable.settingSelected : Drawable.setting;
                            }

                            return <Image style={{
                                width: size,
                                height: size
                            }
                            } source={iconName} />
                        },
                    })
                }>
                <Tab.Screen name='Station' component={StationScreen} />
                <Tab.Screen name='History' component={HistoryScreen} />
                <Tab.Screen name='Setting' component={SettingScreen} />
            </Tab.Navigator>
            
        
    );
}

export default HomeScreen;