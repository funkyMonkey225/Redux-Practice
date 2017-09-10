import React, {Component} from 'react';

class SearchBar extends Component {
    
    _onInputChange = (event) => {
        console.log(event.target.value);   
    }
    
    render() {
        return <input onChange={this._onInputChange} />;
    }
};

export default SearchBar;