import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Constants from '../utils/Constants';
import { Colors } from '../resources/Colors';
import { Styles } from '../resources/Styles';


const ForegotpasswordScreen = ({navigation,route}) => {
    
    return (
        <View style={Styles.registrationContainer}>
            <Text style={Styles.topRightText}>{Constants.SignIn}</Text>
            <Text style={Styles.titleText}>{Constants.ForgotPassword}</Text>
            <Text style={Styles.subTitle}>{Constants.ForgotPasswordDescription}</Text>
            <Text style={Styles.inputTitle}>{Constants.EmailAddress}</Text>
            <TextInput style={Styles.inputText}
                placeholder={Constants.EnterYourEmailAddress}
                placeholderTextColor={Colors.gray}
                value={route.params.email}
            />

            <TouchableOpacity style={Styles.blueButtonTouchableOpcity}>
                <Text style={Styles.blueButtonText}>{Constants.ForgotPassword}</Text>
            </TouchableOpacity>

        </View>
    );
}

export default ForegotpasswordScreen;