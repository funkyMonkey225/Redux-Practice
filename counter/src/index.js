import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CounterContainer from './containers/CounterDisplay';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import UndoRedoContainer from './containers/UndoRedoContainer.js';
import * as actions from './actions';
import reduxPromise from 'redux-promise';
import MartaApp from './MartaApp';

// const store = createStore(rootReducer, applyMiddleware(reduxPromise), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const createAsyncStore = applyMiddleware(reduxPromise)(createStore);
const store = createAsyncStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;
window.fetchData = actions.fetchData;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Count!</Link></li>
                    <li><Link to="/marta">Martaah</Link></li>
                </ul>
                <Route path="/counter" component={CounterContainer} />
                <Route path="/marta/:filter" component={MartaApp} />
                <Route exact path="/marta" component={MartaApp} />
                {/*<MartaContainer />*/}
                {/*<CounterContainer />*/}
                {/*<UndoRedoContainer />*/}
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
