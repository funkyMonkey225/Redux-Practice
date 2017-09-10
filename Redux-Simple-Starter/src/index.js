import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD9L4feFPhk4ZIjzjm2b5apTdVO9GmYDQA';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div>
                <SearchBar />
            </div>
        );
    }
}


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );
