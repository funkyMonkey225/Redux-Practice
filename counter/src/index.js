import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CounterContainer from './containers/CounterDisplay';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';
import UndoRedoContainer from './containers/UndoRedoContainer.js';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <div> 
            <UndoRedoContainer />
            <CounterContainer />
        </div>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
