import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>Hi!</div>;
}


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );
