import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import TodoList from './todo/TodoList'

const App=()=>{
    return(
    <div>
        <TodoList />
    </div>
    )
}
export default hot(module)(App);