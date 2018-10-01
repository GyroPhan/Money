import React, { Component } from 'react';
import { YellowBox, AppRegistry } from 'react-native'
YellowBox.ignoreWarnings([
  'Remote debugger',
])

import {
    View, ScrollView,
    Text, Image,
    TextInput, TouchableOpacity, Switch,
    FlatList,
} from 'react-native';

const ADD = require('../Image/ADD.png');

export default class ThuChi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datathu: [
                { nguonThu: 'luong JT', tienThu: '8000' },
                { nguonThu: 'kinh doanh', tienThu: '2000' },
                { nguonThu: 'chay grab', tienThu: '1000' },
            ],
            datachi: [
                { nguonChi: 'tra no MAC', tienChi: '2000' },
                { nguonChi: 'me', tienChi: '2000' },
                { nguonChi: 'ngoc', tienChi: '1000' },
            ],
            switchValue: false,
        }
    }
    renderItemThu = ({ item, index }) => {
        return (
            <View style={ao.baorender}>
                <View style={ao.baorenderinfo}>
                    <Text style={ao.chuinfo}>{item.nguonThu}</Text>
                </View>
                <View style={ao.baorendertien}>
                    <Text style={ao.chutien}>{item.tienThu}</Text>
                </View>
            </View>
        )
    }
    renderItemChi = ({ item, index }) => {
        return (
            <View style={ao.baorender}>
                <View style={ao.baorenderinfo}>
                    <Text style={ao.chuinfo}>{item.nguonChi}</Text>
                </View>
                <View style={ao.baorendertien}>
                    <Text style={ao.chutien}>{item.tienChi}</Text>
                </View>
            </View>
        )
    }
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
                                onValueChange={(value) => {
                                    this.setState({ switchValue: value });
                                    console.log(this.state.switchValue)
                                }}
                                value={this.state.switchValue}

                            />
                            <Text style={{ fontSize: 20 }}>CHI</Text>
                        </View>

                        <TouchableOpacity style={ao.nut}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={ADD} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 5 }}>
                    <ScrollView style={ao.baoinfo}>
                        <FlatList
                            data={this.state.datathu}
                            renderItem={this.renderItemThu}
                            keyExtractor={(item, index) => index.toString()}
                        >
                        </FlatList>
                    </ScrollView>

                    <ScrollView style={ao.baoinfo}>
                        <FlatList
                            data={this.state.datachi}
                            renderItem={this.renderItemChi}
                            keyExtractor={(item, index) => index.toString()}
                        >
                        </FlatList>
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
    baoinfo: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
    },
    baorender: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    baorenderinfo: {
        flex: 4.5,
    },
    baorendertien: {
        flex: 1,
    },
    chuinfo: {
        fontSize: 20,
    },
    chutien: {
        fontSize: 20,
    },
}