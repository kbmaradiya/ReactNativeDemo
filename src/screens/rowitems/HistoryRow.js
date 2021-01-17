import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import {Colors} from '../../resources/Colors';
import {Dimen,FontDimen} from '../../resources/Dimentions';

const HistoryRow = ({ name, address }) => {

    return (

        <View style={LocalStyle.rootStyle}>
            <Text style={LocalStyle.nameStyle}>{name}</Text>
            <Text style={LocalStyle.addressStyle}>{address}</Text>
        </View>
    );

}

const LocalStyle = StyleSheet.create({

    rootStyle: {
        flex: 1,
        marginLeft: Dimen.px16,
        marginRight:Dimen.px16,
        marginTop:Dimen.px6,
        marginBottom:Dimen.px6,
        padding:Dimen.px6,
        borderRadius: Dimen.px6,
        borderColor: Colors.gray,
        borderWidth: Dimen.px1,
    },
    nameStyle:{
        fontSize:FontDimen.font22,
    },
    addressStyle:{
        fontSize:FontDimen.font18,
    }

});

export default HistoryRow;