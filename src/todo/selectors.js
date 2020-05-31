import {createSelector} from 'reselect';

export const selectorGetIsLoadingThatTodo=state=> state.reduceTodo.isLoadingThatTodo;
export const selectorGetReduceTodo=state=> state.reduceTodo.todoListHoldingReduceTodo;


//these high order selector have no idea how data is format in redux store
//rely on selectorGetIsLoadingThatTodo or selectorGetReduceTodo to get the
//exact format of data in redux=>best practice to define lots of getter 
export const reselectGetIncompleteReduceTodo=createSelector(
    selectorGetReduceTodo,
    //this is incorrect. don't put {} cause it will break
    //(todoListHoldingReduceTodo)=>{todoListHoldingReduceTodo.filter(individualTodo=>!individualTodo.isCompleted)}
    (todoListHoldingReduceTodo)=>todoListHoldingReduceTodo.filter(individualTodo=>!individualTodo.isCompleted)
);

//createSelector doesn't recompute like when passing a whole state as the argument
//createSelector (return value) only change when (return value of arument selector) change=>less computation
export const reselectGetCompleteReduceTodo=createSelector(
    selectorGetReduceTodo,
    (todoListHoldingReduceTodo)=>todoListHoldingReduceTodo.filter(individualTodo=>individualTodo.isCompleted)
    
);