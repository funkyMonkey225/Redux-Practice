import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions.js';

const BUTTONS = [
    {text: '+',
    onClick: actions.increment},
    {text: '-',
    onClick: actions.decrement}
]

const Button = ({id, text, onClick}) => {
    return (
        <button 
            id={id} 
            onClick={e => {
                e.preventDefault(); 
                onClick(id)}}>
            {text}
        </button>
    );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default Button;