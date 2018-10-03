import React, { Component } from 'react';

import { View, Text } from 'react-native';
export default class Testcong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datathu: [
                { nguonThu: 'luong JT', tienThu: '8000' },
                { nguonThu: 'kinh doanh', tienThu: '2000' },
                { nguonThu: 'chay grab', tienThu: '1000' },
            ],
            s1: '',
            s2: '',
        }
    }
    tinhtoan1 = () => {
        const array1 = [1, 2, 3, 4, 7];
        const cac = (a, b) => a + b;

        // 1 + 2 + 3 + 4
        this.state.s1 = array1.reduce(cac)
        console.log(array1.reduce(cac));
        // expected output: 10

        // 5 + 1 + 2 + 3 + 4
        this.state.s2 = array1.reduce(cac, 5)
        console.log(array1.reduce(cac, 5));
        // expected output: 15

    }


    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text>Testcong</Text>
                {this.tinhtoan1()}
                <Text>{this.state.s1}</Text>
                <Text>{this.state.s2}</Text>
            </View>
        );
    }
}