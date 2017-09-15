import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions.js';
import Button from './Button.js';
import NumDisplay from './NumDisplay.js';

// const BUTTONS = [
//     {text: '+',
//     onClick: actions.increment},
//     {text: '-',
//     onClick: actions.decrement}
// ]

const Counter = ({counter, onIncrement, onDecrement}) => (
    <div>
        <NumDisplay counter={counter}/>
        <Button text="+" onClick={onIncrement} />
        <Button text="-" onClick={onDecrement} />
    </div>
)

export default Counter;