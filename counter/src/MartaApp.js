import React from 'react';
import MartaContainer from './martacontainer.js';

const MartaApp = (props) => {
    let filter = props.match.params.filter || 'North Springs'
    return (<MartaContainer filter={filter} />)
}

export default MartaApp;