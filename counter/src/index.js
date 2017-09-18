import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CounterContainer from './containers/CounterDisplay';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import UndoRedoContainer from './containers/UndoRedoContainer.js';
import * as actions from './actions';
import reduxPromise from 'redux-promise';

const store = createStore(rootReducer, applyMiddleware(reduxPromise), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;
window.fetchData = actions.fetchData;

ReactDOM.render(
    <Provider store={store}>
        <div> 
            {/*<UndoRedoContainer />*/}
            <CounterContainer />
        </div>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
