import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import { createStore, applyMiddleware } from 'redux';

const API_KEY = 'AIzaSyD9L4feFPhk4ZIjzjm2b5apTdVO9GmYDQA';

const App = () => {
    return ( 
    <div>
        <SearchBar />
    </div>
    );
}


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );
