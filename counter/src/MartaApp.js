import React from 'react';
import MartaDash from './martadash.js';

const MartaApp = (props) => {
    let filter = props.match.params.filter || 'North Springs'
    return (<MartaDash filter={filter} />)
}

export default MartaApp;