import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem.js';
import NewTodoForm from './NewTodoForm.js';
import {removeStuffTodo, finishStuffTodo} from './actions.js';
import {thunkDisplayAlert, thunkLoadStuffTodo} from './thunks';
import './TodoList.css';
import { isLoadingThatTodo } from './reducers.js';

//props much match the mapStateToProps of reducer
//becareful of the ({}) misplacement. Wasted 4h for misplacing }
const TodoList=({reduceTodo =[], onRemovePressed, onFinishPressed, isLoadingThatTodo, startLoadingToDoNowOhYeah})=>{
    //the empty array at the end is a parameter to help the page stop continuously loading
    useEffect(()=>{startLoadingToDoNowOhYeah();}, [])
    
    const thunkLoadingMessage=<div>Thunk loading and stuff...</div>
    const thunkContent=(
        <div className="div-wrapper">
            <NewTodoForm />
            {reduceTodo.map((onethingtodo, id)=><ListItem itemTodo={onethingtodo} 
                                                          key={id} 
                                                          onRemovePressedOfLI={onRemovePressed}
                                                          onFinishPressedLI={onFinishPressed}/>)}
        </div>
    )
    return isLoadingThatTodo? thunkLoadingMessage:thunkContent;
}
const mapStateToProps=state=>({
    isLoadingThatTodo: state.isLoadingThatTodo,
    reduceTodo: state.reduceTodo,
})
const mapDispatchToProps= dispatch=>({
    onRemovePressed: deletingText=>dispatch(removeStuffTodo(deletingText)),
    //onFinishPressed: (finishingText, isCompleted) =>dispatch(finishStuffTodo(finishingText, isCompleted)),
    onFinishPressed: finishingText =>dispatch(finishStuffTodo(finishingText)),
    startLoadingToDoNowOhYeah: ()=>dispatch(thunkLoadStuffTodo()),

})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);