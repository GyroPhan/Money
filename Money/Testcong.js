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
            array1: [1, 2, 3, 4, 7],
            s1: '',
            s2: '',
            newar: [],
            sum:'',
        }
    }
    tinhtoan1 = () => {
        const cac = (a, b) => a + b;
        // 1 + 2 + 3 + 4
        this.state.s1 = this.state.array1.reduce(cac)
        console.log(this.state.s1);
        // expected output: 10

        // 5 + 1 + 2 + 3 + 4
        this.state.s2 = this.state.array1.reduce(cac, 5)
        console.log(this.state.s2);
        // expected output: 15

    }
    taomang() {

        this.state.datathu.map((item, index) => {
            console.log('map', this.state.datathu[index].tienThu)

            this.state.newar.push(Number(this.state.datathu[index].tienThu))
            console.log('push', this.state.newar)

        const cac = (a, b) => a + b
            this.state.sum= this.state.newar.reduce(cac)
        })
    }


    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text>Testcong</Text>
                {this.taomang()}
                <Text>{this.state.sum}</Text>
                <Text>{this.state.s2}</Text>
            </View>
        );
    }
}