import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';

export default class Cheese extends Component {
    render() {
        let pic = {
            uri: 'http://www4.pictures.zimbio.com/mp/26-j9dYPwm_l.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        )
    }
}

AppRegistry.registerComponent('Doodles', () => Cheese);