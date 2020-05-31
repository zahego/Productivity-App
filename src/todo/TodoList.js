import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem.js';
import NewTodoForm from './NewTodoForm.js';
import styled from 'styled-components';
import {selectorGetIsLoadingThatTodo, 
    reselectGetIncompleteReduceTodo,
    reselectGetCompleteReduceTodo} from './selectors';
import {removeStuffTodo, finishStuffTodo} from './actions.js';
import {thunkDisplayAlert, thunkLoadStuffTodo, thunkRemoveThatTodo, thunkFinishThatTodo} from './thunks';
import './TodoList.css';
import { isLoadingThatTodo } from './reducers.js';

const DivWrapper=styled.div``;

//props much match the mapStateToProps of reducer
//becareful of the ({}) misplacement. Wasted 4h for misplacing }
const TodoList=({reduceCompleteTodo =[],reduceIncompleteTodo=[], onRemovePressed, onFinishPressed, isLoadingThatTodo, startLoadingToDoNowOhYeah})=>{
    //the empty array at the end is a parameter to help the page stop continuously loading

    useEffect(()=>{startLoadingToDoNowOhYeah();}, [])
    console.log(reduceIncompleteTodo);
    const thunkLoadingMessage=<div>Thunk loading and stuff...</div>
    const thunkContent=(
        <div className="div-wrapper">
            <NewTodoForm />
            <h3>Incomplete</h3>
            {reduceIncompleteTodo.map((onethingtodo, id)=><ListItem itemTodo={onethingtodo} 
                                                          key={id} 
                                                          onRemovePressedOfLI={onRemovePressed}
                                                          onFinishPressedLI={onFinishPressed}/>)}
            <h3>Complete</h3>
            {reduceCompleteTodo.map((onethingtodo, id)=><ListItem itemTodo={onethingtodo} 
                                                          key={id} 
                                                          onRemovePressedOfLI={onRemovePressed}
                                                          onFinishPressedLI={onFinishPressed}/>)}
        </div>
    )
    return isLoadingThatTodo? thunkLoadingMessage:thunkContent;
}
const mapStateToProps=state=>({
    isLoadingThatTodo: selectorGetIsLoadingThatTodo(state),
    reduceCompleteTodo: reselectGetCompleteReduceTodo(state),
    reduceIncompleteTodo: reselectGetIncompleteReduceTodo(state),
})
const mapDispatchToProps= dispatch=>({
    //before thunk and server
    /*onRemovePressed: deletingText=>dispatch(removeStuffTodo(deletingText)),*/
    //after thunk and server
    onRemovePressed: id=>dispatch(thunkRemoveThatTodo(id)),
    //onFinishPressed: (finishingText, isCompleted) =>dispatch(finishStuffTodo(finishingText, isCompleted)),
    onFinishPressed: id =>dispatch(thunkFinishThatTodo(id)),
    startLoadingToDoNowOhYeah: ()=>dispatch(thunkLoadStuffTodo()),

})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);