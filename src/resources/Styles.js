import {StyleSheet} from 'react-native';
import {Colors} from '../resources/Colors';
import {FontDimen,Dimen} from '../resources/Dimentions';

export const Styles=StyleSheet.create({
    registrationContainer:{
        margin:FontDimen.font16
    },
    topRightText:{
        fontSize:FontDimen.font15,
        color:Colors.blue,
        textAlign:'right',
        fontWeight:'normal'
    },
    titleText:{
        fontSize:FontDimen.font28,
        color:Colors.black,
        fontWeight:'bold',
        marginTop:Dimen.px10
    },
    subTitle:{
        fontSize:FontDimen.font17,
        color:Colors.gray,
        marginTop:Dimen.px10
    },
    inputTitle:{
        fontSize:FontDimen.font15,
        color:Colors.black,
        marginTop:Dimen.px16,
        fontWeight:'bold'
    },
    inputText:{
        fontSize:FontDimen.font17,
        color:Colors.black,
        marginTop:Dimen.px10,
        paddingTop:Dimen.px10,
        paddingBottom:Dimen.px10,
        paddingStart:Dimen.px14,
        paddingEnd:Dimen.px14,
        borderColor:Colors.borderGray,
        borderWidth:Dimen.px1,
        borderRadius:Dimen.px4
    },
    passwordInputText:{
        fontSize:FontDimen.font17,
        color:Colors.black,
        paddingTop:Dimen.px10,
        paddingBottom:Dimen.px10,
        paddingStart:Dimen.px14,
        paddingEnd:Dimen.px14
    },
    passwordRootView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderColor:Colors.borderGray,
        borderWidth:Dimen.px1,
        borderRadius:Dimen.px4,
        marginTop:Dimen.px10,
    },
    passwordIcon:{
        height: 25,
        width: 25,
        marginEnd:Dimen.px14,
        resizeMode: 'stretch',
        alignItems:'flex-end'
    },
    blueButtonTouchableOpcity:{
        marginTop:Dimen.px20,
        backgroundColor:Colors.blue,
        borderRadius:Dimen.px4
    },
    blueButtonText:{
        fontSize:FontDimen.font16,
        color:Colors.white,
        fontWeight:'300',
        paddingTop:Dimen.px14,
        paddingBottom:Dimen.px14,
        textAlign:'center'
    },
    forgotPassword:{
        fontSize:FontDimen.font15,
        color:Colors.blue,
        textAlign:'center',
        fontWeight:'normal',
        marginTop:Dimen.px20,
    },
    pickerBorder:{
        marginTop:Dimen.px10,
        borderColor:Colors.borderGray,
        borderWidth:Dimen.px1,
        borderRadius:Dimen.px4
    },
    drawerScreenRoortView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    drawerScreenText:{
        fontSize:FontDimen.font28
    }
    
});

