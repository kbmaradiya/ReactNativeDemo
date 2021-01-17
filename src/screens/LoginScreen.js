import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { StackActions } from '@react-navigation/native';
import Loader from '../utils/Loader';
import axios from 'axios';
import * as Constants from '../utils/Constants';
import { Colors } from '../resources/Colors';
import { Styles } from '../resources/Styles';
import * as Drawables from '../resources/drawables/Drawables'


const LoginScreen = ({ navigation }) => {

    const [passwordImage, setPasswordImage] = useState(Drawables.eyeOn);
    const [isPassWordShowing, setPasswordShowing] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const passwordImageClick = () => {
        setPasswordShowing(!isPassWordShowing);
        if (isPassWordShowing) {
            setPasswordImage(Drawables.eyeOff);
        } else {
            setPasswordImage(Drawables.eyeOn);
        }
    };

    const singInButtonClick = () => {
        if (!email.trim()) {
            alert('Please enter Email');
        } else if (!password.trim()) {
            alert('Please enter Password');
        } else {
            callLoginAPI();
        }
    };

    const callLoginAPI = () => {

        setLoading(true);
        const user = {
            email: email,
            password: password
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res.data);
                navigation.dispatch(StackActions.replace('Home', { email: email }))
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            })

    };

    return (

        <View style={{flex:1}}>
            <View style={Styles.registrationContainer}>

                <Text style={Styles.topRightText}
                    onPress={() => navigation.navigate('SignUp')}
                >{Constants.SignUp}</Text>
                <Text style={Styles.titleText}>{Constants.SignIn}</Text>
                <Text style={Styles.subTitle}>{Constants.SignInDescription}</Text>
                <Text style={Styles.inputTitle}>{Constants.EmailAddress}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterYourEmailAddress}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => setEmail(value)} />
                <Text style={Styles.inputTitle}>{Constants.Password}</Text>
                <View style={Styles.passwordRootView}>
                    <TextInput style={Styles.passwordInputText}
                        secureTextEntry={isPassWordShowing}
                        placeholder={Constants.EnterYourPassword}
                        placeholderTextColor={Colors.gray}
                        onChangeText={(value) => setPassword(value)} />
                    <TouchableOpacity onPress={passwordImageClick}>
                        <Image style={Styles.passwordIcon}
                            source={passwordImage}></Image>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Styles.blueButtonTouchableOpcity}
                    onPress={singInButtonClick}>
                    <Text style={Styles.blueButtonText}>{Constants.SignIn}</Text>
                </TouchableOpacity>
                <Text style={Styles.forgotPassword}
                    onPress={() => navigation.navigate('ForgotPassword', { email: email, })}
                >{Constants.ForgotPassword} ?</Text>
            </View>
            {isLoading ? <Loader /> : <Text></Text>}
        </View>
    );

}

export default LoginScreen;
