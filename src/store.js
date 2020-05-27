import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reduceTodo, isLoadingThatTodo} from './todo/reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from 'redux-devtools-extension';


//naming of this file is due to the redux naming convention
//a constant to hold all the reducers that will be defined later on
const todoReduce ={ reduceTodo, isLoadingThatTodo };

//autoMergeLevel2 tell Redux Persist how to reconcile the initial and stored state of application,
//as in how deep it should go (level 2)
const persistConfig={
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

//put all reducers to a form that can be used to pass to createStore
const rootTodoReduce=combineReducers(todoReduce);

//persistConfig tell redux persist how to save and where to store data
//persist reducer
//the key idea of this one is to store the data on browser's application's local storage
//this help so that when THE CODE IS RUNNING and THE USER REFRESH, the data is stored
//when the CODE IS NOT RUNNING, IT WILL STILL STORED on the browser, wth, lmao
const persistTodoReduce =persistReducer(persistConfig, rootTodoReduce)

//issue with @babel/runtime was fixed by reinstall with yarn add @abel/runtime
//instead of root reducer, now pass persist reducer
export const configureStore =()=>createStore(
    persistTodoReduce,
    //instead of dev tool, will use thunk with dev tool
    /*window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__(),*/
    composeWithDevTools(
        applyMiddleware(thunk)
    ));