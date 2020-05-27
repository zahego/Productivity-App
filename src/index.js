import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {configureStore} from './store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import App from './App.js';


//issue with @babel/runtime was fixed by reinstall with yarn add @abel/runtime
const indexStore=configureStore();
const indexPersistor=persistStore(indexStore);
ReactDOM.render(
    <Provider store={indexStore}>
        <PersistGate 
                    loading={<div>Loading...</div>}
                    persistor={indexPersistor}>
        <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
    )
