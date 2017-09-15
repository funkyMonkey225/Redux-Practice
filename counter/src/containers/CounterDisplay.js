import React from 'react';
import { connect } from 'react-redux';

const CounterDisplay = ({counter}) => {
    return (
        <h1>{counter}</h1>
    )
}

const mapStateToProps = state => ({
    counter: state
});

const CounterContainer = connect(
    mapStateToProps
)(CounterDisplay);

export default CounterContainer;