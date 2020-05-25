import React from 'react';
import {ListItem} from './ListItem.js';
import {NewTodoForm} from './NewTodoForm.js';
import './TodoList.css';

const TodoList=({whatToDo =[{text:"stuff"},{text:"duff"}]})=>{
    return(
        <div className="div-wrapper">
            <NewTodoForm />
            {whatToDo.map((thingToDo, id)=><ListItem stuffToDo={thingToDo} key={id}/>)}
        </div>
    )
}
export default TodoList;