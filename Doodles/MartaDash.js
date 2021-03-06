import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, Button} from 'react-native';
import axios from 'axios';

const MARTA_URL='http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1';

const fetchData = () => {
    return axios.get(MARTA_URL)
}

const styles = StyleSheet.create({
    martaContainer: {
        height: 40
    }
})

export default class MartaDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marta: []
        };
    }
    render() {
        return (
            <ScrollView>
                <Button onPress={this._handleClick} title="GetClicky!"/>
                {this.state.marta ?
                this.state.marta.map((item, idx) => (
                <Text key={idx}>{item.DESTINATION}: {item.STATION} ({item.WAITING_SECONDS})</Text>)) 
                : <Text>Nothing</Text>}
            </ScrollView>
        )
    }
    _handleClick = () => {
         fetchData().then((resp) => {
                this.setState({
                    marta: resp.data
                })
            })
    }
}