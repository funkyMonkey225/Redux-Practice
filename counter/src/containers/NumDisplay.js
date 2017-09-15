import React from 'react';
import { connect } from 'react-redux';

const CounterDisplay = ({counter}) => {
    return (
        <h1>{counter}</h1>
    )
}

export default CounterDisplay;