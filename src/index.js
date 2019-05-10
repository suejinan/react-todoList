import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

/* 
    custom setting(log middleware)
    :: https://github.com/evgenyrodionov/redux-logger#options
*/
const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( 
    reducers, composeEnhancers(applyMiddleware(logger))
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();