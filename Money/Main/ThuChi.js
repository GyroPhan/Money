import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ThuChi extends Component {

    render() {
        return (
            <View style={ao.baolon}>
                <View style={ao.baonhap}>

                </View>
                <View style={ao.baoinfo}>

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
        flex: 2,
        backgroundColor: '#FF4500',
        margin:5,

    },
    baoinfo: {
        flex: 5,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'black',
        margin:5,
    },
    baoketqua: {
        flex: 1,
        backgroundColor: '#9ACD32',
        margin:5,

    },
}