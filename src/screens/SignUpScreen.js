import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import Loader from '../utils/Loader';
import axios from 'axios';
import * as Constants from '../utils/Constants';
import { Colors } from '../resources/Colors';
import { Styles } from '../resources/Styles';
import * as Drawables from '../resources/drawables/Drawables'


const SignUpScreen = ({ navigation }) => {


    const UserDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordImage: Drawables.eyeOn,
        isPassWordShowing: true,
        vehicalMake: '',
        vehicalModel: '',
        vehicalColor: '',
        licensePlatenumber: '',
        stateRegistered: '',
    }
    const [User, setUser] = useState(UserDetails);
    const [stateList, setStateList] = useState(new Array());
    const [isLoader, setLoader] = useState(true);

    useEffect(() => {
        if (stateList.length <= 0) {

            callStateListAPI();
        }
    });

    const passwordImageClick = () => {
        setUser(UserDetails.isPassWordShowing = !User.isPassWordShowing);
        if (User.isPassWordShowing) {
            UserDetails.passwordImage = Drawables.eyeOff
        } else {
            UserDetails.passwordImage = Drawables.eyeOn
        }
        setUser(UserDetails);
    };

    const singInButtonClick = () => {
        console.log("Email : " + UserDetails.email)
    };

    const callLoginAPI = () => {

        // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        //     .then(res => {
        //         console.log(res.data);
        //         navigation.navigate('Home', { email: email })
        //     })
        //     .catch(error => {

        //         console.error(error);
        //     })

    };

    const callStateListAPI = () => {
        axios.get(`http://localhost/users/get-states`)
            .then(res => {
                console.log("data : " + res.data);
                setStateList(res.data.data);
                setLoader(false);
            })
            .catch(error => {
                console.error("error : " + error);
                setLoader(false);
            })

    };
    return (

        <View>
            <ScrollView style={Styles.registrationContainer}
                showsVerticalScrollIndicator={false}>

                <Text style={Styles.topRightText}
                    onPress={() => navigation.navigate('SignUp')}
                >{Constants.SignIn}</Text>

                <Text style={Styles.titleText}>{Constants.SignUp}</Text>
                <Text style={Styles.subTitle}>{Constants.SignUpDescription}</Text>

                <Text style={Styles.inputTitle}>{Constants.FirstName}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterFirstName}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.firstName = value} />

                <Text style={Styles.inputTitle}>{Constants.LastName}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterLastName}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.lastName = value} />

                <Text style={Styles.inputTitle}>{Constants.EmailAddress}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterYourEmailAddress}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.email = value} />

                <Text style={Styles.inputTitle}>{Constants.PhoneNumber}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterPhoneNumber}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.email = value} />

                <Text style={Styles.inputTitle}>{Constants.Password}</Text>
                <View style={Styles.passwordRootView}>
                    <TextInput style={Styles.passwordInputText}
                        secureTextEntry={User.isPassWordShowing}
                        placeholder={Constants.EnterYourPassword}
                        placeholderTextColor={Colors.gray}
                        onChangeText={(value) => UserDetails.password = value} />
                    <TouchableOpacity onPress={passwordImageClick}>
                        <Image style={Styles.passwordIcon}
                            source={User.passwordImage}></Image>
                    </TouchableOpacity>
                </View>

                <Text style={Styles.inputTitle}>{Constants.VehicalMake}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterVehicalMake}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.vehicalMake = value} />

                <Text style={Styles.inputTitle}>{Constants.VehicalModel}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterVehicalModel}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.vehicalModel = value} />

                <Text style={Styles.inputTitle}>{Constants.VehicalColor}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterVehicalColor}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.vehicalColor = value} />

                <Text style={Styles.inputTitle}>{Constants.LicensePlateNumber}</Text>
                <TextInput style={Styles.inputText}
                    placeholder={Constants.EnterLicensePlateNumber}
                    placeholderTextColor={Colors.gray}
                    onChangeText={(value) => UserDetails.licensePlatenumber = value} />

                <Text style={Styles.inputTitle}>{Constants.LicensePlateNumber}</Text>
                <View style={Styles.pickerBorder}>
                    <Picker selectedValue={UserDetails.stateRegistered}
                        onValueChange={(itemValue, itemIndex) => UserDetails.stateRegistered =itemValue}>{
                            stateList.map((v) => {
                                return <Picker.Item label={v.name} />
                            })
                        }
                    </Picker>
                </View>

                <TouchableOpacity style={Styles.blueButtonTouchableOpcity}
                    onPress={singInButtonClick}>
                    <Text style={Styles.blueButtonText}>{Constants.SignIn}</Text>
                </TouchableOpacity>


            </ScrollView>
            {isLoader ? <Loader /> : <Text></Text>}
        </View>
    );

}

export default SignUpScreen;
