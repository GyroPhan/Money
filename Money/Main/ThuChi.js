import React, { Component } from 'react';
import {
    View, ScrollView,
    Text, Image,
    TextInput, TouchableOpacity, Switch
} from 'react-native';

const ADD = require('../Image/ADD.png');

export default class ThuChi extends Component {

    render() {
        return (
            <View style={ao.baolon}>
                <View style={ao.baonhap}>
                    <View style={ao.baoinput}>
                        <TextInput
                            style={ao.input1}
                        />
                        <TextInput
                            style={ao.input2}

                        />
                    </View>
                    <View style={ao.baonut}>
                        <View style={ao.congtac}>
                            <Text style={{ fontSize: 20 }}>THU</Text>
                            <Switch

                            />
                            <Text style={{ fontSize: 20 }}>CHI</Text>
                        </View>

                        <TouchableOpacity style={ao.nut}>
                            <Image 
                            style={{width:50, height:50}}
                            source={ADD}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex:5}}>
                    <ScrollView style={ao.baoinfo1}>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                     
                    </ScrollView>
                    <ScrollView style={ao.baoinfo2}>
                    <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                        <Text> INFO</Text>
                    </ScrollView>
                </View>

                <View style={ao.baoketqua}>

                </View>

            </View>
        );
    }
}

const ao = {
    baolon: {
        flex: 1,
    },
    baonhap: {
        flex: 1.5,
    },
  
    baoketqua: {
        flex: 0.7,
        backgroundColor: '#9ACD32',
        margin: 5,
    },
    baoinput: {
        flex: 1,
        flexDirection: 'row',
    },
    input1: {
        flex: 3,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 25,

    },
    input2: {
        flex: 1,      
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 25,
    },
    baonut: {
        flex: 1,
        flexDirection: 'row',


    },
    nut: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    congtac: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    baoinfo1:{
        flex:1,
        borderWidth: 1,
        borderColor: 'black',
        margin:5,
    },
    baoinfo2:{
        flex:1,
        borderWidth: 1,
        borderColor: 'black',
        margin:5,

    },
}