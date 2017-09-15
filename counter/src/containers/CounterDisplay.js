import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as actions from '../actions';


const mapStateToProps = state => {
    return {
    counter: state.counter
    }
};

const mapDispatchToProps = dispatch => ({
    onIncrement: () => {
        dispatch(actions.increment())
    },
    onDecrement: () => {
        dispatch(actions.decrement())
    }
})

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;