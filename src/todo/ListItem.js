import React from 'react';
 const ListItem =({itemTodo, onRemovePressedOfLI, onFinishPressedLI})=>{
    return(
        <div className="list-item-wrapper">
            <h3>{itemTodo.text}</h3>
            <div className="button-container">
            {itemTodo.isCompleted?null:<button onClick={()=>onFinishPressedLI(itemTodo.id/*, itemTodo.isCompleted*/)}
            className="complete-container">Mark as Completed</button>}
            <button onClick={()=>onRemovePressedOfLI(itemTodo.id)}
            className="remove-container">Remove</button>
            </div>
        </div>
    )
}
export default ListItem;