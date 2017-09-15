import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions.js';

const Button = ({text, onClick}) => {
    return (
        <button 
            key={text} 
            onClick={e => {
                e.preventDefault(); 
                onClick();
                }}>
            {text}
        </button>
    );
};

export default Button;