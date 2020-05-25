import React from 'react';
export const ListItem =({stuffToDo})=>{
    return(
        <div className="list-item-wrapper">
            <h3>{stuffToDo.text}</h3>
            <div className="button-container">
            <button className="complete-container">Mark as Completed</button>
            <button className="remove-container">Remove</button>
            </div>
        </div>
    )
}