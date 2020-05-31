import React from 'react';
import styled from 'styled-components';
//8640000 second=1 day
//if dateprop is less recent than 5 days from today, highlight it red

//this is best for testing. Also good code practice to put logic inside method for reuse
export const getBorderDateForTest=(startingdate, currentdate)=>{
    return(startingdate>new Date(currentdate-8640000*5)
    ?'none':'3px solid red');
}

const ListItemWrapper=styled.div`
    
    `;
const ListItemWrapperWithWarning=styled(ListItemWrapper)`
    border-bottom: ${dateProps=>getBorderDateForTest(new Date(dateProps.todoCreatedDate), Date.now())};
`;
 const ListItem =({itemTodo, onRemovePressedOfLI, onFinishPressedLI})=>{
    const CompletedContainer=itemTodo.isCompleted?ListItemWrapper:ListItemWrapperWithWarning;
    return(
        <CompletedContainer todoCreatedDate={itemTodo.createdAt}>
            <h3>{itemTodo.text}</h3>
            <p>Created At: &nbsp; 
                {(new Date(itemTodo.createdAt)).toLocaleDateString()}
            </p>
            <div className="button-container">
            {itemTodo.isCompleted?null:<button onClick={()=>onFinishPressedLI(itemTodo.id/*, itemTodo.isCompleted*/)}
            className="complete-container">Mark as Completed</button>}
            <button onClick={()=>onRemovePressedOfLI(itemTodo.id)}
            className="remove-container">Remove</button>
            </div>
        </CompletedContainer>
    )
}
export default ListItem;