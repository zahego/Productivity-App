//naming of this file is due to the redux naming convention

import { reduceTodo } from "./reducers";

//action type
export const CREATE_THE_STUFF_TODO='CREATE_THE_STUFF_TODO';
//action creator
export const createStuffTodo=/*someActionText*/text=>({
    type:CREATE_THE_STUFF_TODO,
payload: {/*someActionText*/text}
});

//action type
export const REMOVE_THE_STUFF_TODO='REMOVE_THE_STUFF_TODO';
//action creator
export const removeStuffTodo=/*someActionText*/text=>({
    type:REMOVE_THE_STUFF_TODO,
    payload: {/*someActionText*/text}
});

export const FINISH_THE_STUFF_TODO='FINISH_THE_STUFF_TODO';
//action creator
export const finishStuffTodo=/*(text, isCompleted)*/text=>(
    /*console.log(isCompleted),*/{
    type:FINISH_THE_STUFF_TODO,
    //payload: {text, isCompleted}
    payload: {text}
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