//naming of this file is due to the redux naming convention

import { reduceTodo } from "./reducers";

//action type
export const CREATE_THE_STUFF_TODO='CREATE_THE_STUFF_TODO';
//action creator
//before thunk and server is the same as after
export const createStuffTodo=reduceTodo=>({
    type:CREATE_THE_STUFF_TODO,
payload: {reduceTodo}
});

//action type
export const REMOVE_THE_STUFF_TODO='REMOVE_THE_STUFF_TODO';
//action creator
//before thunk and server
/*export const removeStuffTodo=text=>({
    type:REMOVE_THE_STUFF_TODO,
    payload: {text}
});*/
//after thunk and server
//the item deleted will remain deleted even when the page restart, it will only reset when the server restart
export const removeStuffTodo=reduceTodo=>({
    type:REMOVE_THE_STUFF_TODO,
    payload: {reduceTodo}
});


export const FINISH_THE_STUFF_TODO='FINISH_THE_STUFF_TODO';
//action creator
export const finishStuffTodo=/*(text, isCompleted)*/reduceTodo=>(
    /*console.log(isCompleted),*/{
    type:FINISH_THE_STUFF_TODO,
    //payload: {text, isCompleted}
    payload: {reduceTodo}
});

export const LOAD_THE_STUFF_TODO_WITH_PROGRSSION='LOAD_THE_STUFF_TODO_WITH_PROGRSSION';
//action creator
export const loadTheStuffTodoProgress=()=>(
    {
    type:LOAD_THE_STUFF_TODO_WITH_PROGRSSION,
});

export const LOAD_THE_STUFF_TODO_TRUE_SUCCESS='LOAD_THE_STUFF_TODO_TRUE_SUCCESS';
//action creator
export const loadTheStuffTodoTrueSuccess=reduceTodo=>(
    {
    type:LOAD_THE_STUFF_TODO_TRUE_SUCCESS,
    payload:{reduceTodo},
});

export const LOAD_THE_STUFF_TODO_PAINFUL_FAILURE='LOAD_THE_STUFF_TODO_PAINFUL_FAILURE';
//action creator
export const loadTheStuffTodoPainfulFailure=()=>(
    {
    type:LOAD_THE_STUFF_TODO_PAINFUL_FAILURE,
});