import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as actions from '../actions';


const mapStateToProps = state => {
    return {
    counters: state.counter
    }
};

const mapDispatchToProps = dispatch => ({
    onIncrement: (id) => {
        dispatch(actions.increment(id))
    },
    onDecrement: (id) => {
        dispatch(actions.decrement(id))
    },
    onAddCounter: (id) => {
        dispatch(actions.addCounter(id))
    }
})

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;