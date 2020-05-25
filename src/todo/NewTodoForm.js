import React, {useState} from 'react';
export const NewTodoForm =()=>{
    const [inputForNew, setInputForNEw]=useState('');
    return(
    <div className="NewTodoForm">
        <input className="NewTodoInput" type="text" value={inputForNew} onChange={e=>setInputForNEw(e.target.value)} placeholder="What's the new todo stuff, amigi?"/>
        <button className="NewTodoButton">Create</button>
    </div>
    )
}