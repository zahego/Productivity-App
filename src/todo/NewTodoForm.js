import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStuffTodo} from './actions';
import {thunkCreateThatTodo} from './thunks';
import { selectorGetReduceTodo} from './selectors';

//props much match the mapStateToProps of reducer
const NewTodoForm =({reduceTodoCreate, onCreatePressed})=>{
    const [inputForNew, setInputForNEw]=useState('');
    
    return(
    <div className="NewTodoForm">
        <input className="NewTodoInput" type="text" value={inputForNew} onChange={e=>setInputForNEw(e.target.value)} placeholder="What's the new todo stuff, amigi?"/>
        <button
         onClick={()=>{
             const isDup=reduceTodoCreate.some(itemintodo=>itemintodo.text===inputForNew);
             if(!isDup){
                onCreatePressed(inputForNew);
                setInputForNEw('');
             }
         }}
         className="NewTodoButton">Create</button>
    </div>
    )
}
const mapStateToProps = state =>({
    reduceTodoCreate:selectorGetReduceTodo(state),
});
const mapDispatchToProps = dispatch=>({
onCreatePressed: addingText=> dispatch(thunkCreateThatTodo(addingText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);