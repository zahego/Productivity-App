import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStuffTodo} from './actions';

//props much match the mapStateToProps of reducer
const NewTodoForm =({reduceTodo, onCreatePressed})=>{
    const [inputForNew, setInputForNEw]=useState('');
    
    return(
    <div className="NewTodoForm">
        <input className="NewTodoInput" type="text" value={inputForNew} onChange={e=>setInputForNEw(e.target.value)} placeholder="What's the new todo stuff, amigi?"/>
        <button
         onClick={()=>{
             const isDup=reduceTodo.some(itemintodo=>itemintodo.text===inputForNew);
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
    reduceTodo:state.reduceTodo,
});
const mapDispatchToProps = dispatch=>({
onCreatePressed: addingText=> dispatch(createStuffTodo(addingText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);