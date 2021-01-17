import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontDimen, Dimen } from '../resources/Dimentions';
import { Colors } from '../resources/Colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HistoryRow from './rowitems/HistoryRow';

const CustomItemView = ({ itemList }) => (
    <View >
        <FlatList
            data={itemList}
            renderItem={({ item }) =>
                <HistoryRow
                    name={item.name} 
                    address={item.address} />
            }
            keyExtractor={(item, index) => index.toString()}
        />
    </View>
);

const HistoryDataList = [{ name: 'Krupa',address:'18-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Harvi',address:'19-Jagdish Park, Talala' }, 
{ name: 'Krisha' ,address:'20-Jagdish Park, Talala'}]

const HistoryScreen = ({ navigation }) => {

    return (
        <View style={Styles.rootView}>
            <View style={Styles.topView}>
                <View style={Styles.textParentView}>
                    <Text style={Styles.topText}>{"Total Spent"}</Text>
                    <Text style={Styles.valueText}>{"$1198799"}</Text>
                </View>
                <View style={Styles.verticalBlueLine} />
                <View style={Styles.textParentView}>
                    <Text style={Styles.topText}>{"Total kwh"}</Text>
                    <Text style={Styles.valueText}>{"348997"}</Text>
                </View>
            </View>
        <ScrollView>

            <View>
                <CustomItemView
                    itemList={HistoryDataList} />
            </View>
        </ScrollView>

        </View>
    );
}

const Styles = StyleSheet.create({

    rootView: {
        flex: 1,
    },
    topView: {
        flexDirection: 'row',
        padding: Dimen.px10,
        margin: Dimen.px10,
        borderRadius: Dimen.px6,
        borderColor: Colors.blue,
        borderWidth: Dimen.px1,
        backgroundColor: Colors.lightBlue,

    },
    textParentView: {
        width: '50%'
    },
    verticalBlueLine: {
        width: Dimen.px1,
        backgroundColor: Colors.blue,
    },
    topText: {
        color: Colors.gray,
        textAlign: 'center',
        fontSize: FontDimen.font17,
    },
    valueText: {
        color: Colors.blue,
        textAlign: 'center',
        fontSize: FontDimen.font28,
    }
});

export default HistoryScreen;