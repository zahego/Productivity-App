//naming of this file is due to the redux naming convention
/*any time any action is fired from anywhere in application,
reducer will get called. The 2 argument that will be passed to a reducer
are current state of the resources that the reducer is managing and
the action that was triggered.
Then redux will decide what changes should occur in the state as result of this action.
Then return the updated state, Redux will take this return value and set current state to that*/
import { CREATE_THE_STUFF_TODO,
     REMOVE_THE_STUFF_TODO, 
     FINISH_THE_STUFF_TODO, 
     LOAD_THE_STUFF_TODO_WITH_PROGRSSION,
     LOAD_THE_STUFF_TODO_TRUE_SUCCESS,
     LOAD_THE_STUFF_TODO_PAINFUL_FAILURE} from './actions.js';

//before this, reduceTodo is stored in reduceTodo, isLoadingThatTodo is stored in isLoadingThatTodo
//now both of it is a part of selectorInitialState. reduceTodo now part of selectorInitialState.todoListHoldingReduceTodo
//isLoadingThatTodo now part of selectorInitialState.isLoadingThatTodo
const selectorInitialState={isLoadingThatTodo: false, todoListHoldingReduceTodo: []}

//reducer
/*export const isLoadingThatTodo=(state=selectorInitialState, action)=>{
    const {type}=action;
    switch(type){
        case LOAD_THE_STUFF_TODO_WITH_PROGRSSION:{
            return true;
        }
        case LOAD_THE_STUFF_TODO_TRUE_SUCCESS:{
            return false;
        }
        case LOAD_THE_STUFF_TODO_PAINFUL_FAILURE:{
            return false;
        }
        default:
            return state;
    }
}*/
//another reducer
export const reduceTodo= (state =selectorInitialState, action)=>{
    const {type, payload }=action;

    switch(type){
        //before thunk and server
        /*case CREATE_THE_STUFF_TODO:{
            const {text}=payload;
            const newStuffWithTextTodo={
                text,
                isCompleted:false
            }
            //concat doesn't mutate
            return state.concat(newStuffWithTextTodo);
        }
        
        case REMOVE_THE_STUFF_TODO:{
            const {text}=payload;
            return state.filter(removeTodo=>removeTodo.text!==text);
        }*/
        //after thunk and server
        case CREATE_THE_STUFF_TODO:{
            const {reduceTodo}=payload;
            return {...state,
                todoListHoldingReduceTodo:
                state.todoListHoldingReduceTodo.concat(reduceTodo)};
        }
        case REMOVE_THE_STUFF_TODO:{
            const {reduceTodo:removeThatTodoStuffPlease}=payload;
            return {...state,
                todoListHoldingReduceTodo:
                state.todoListHoldingReduceTodo.filter(removeTodo=>
                    removeTodo.id!==removeThatTodoStuffPlease.id)};
        }
        case FINISH_THE_STUFF_TODO:{
            const {reduceTodo:finishThatTodoStuffPlease}=payload;
            //itemTodo in ListItem
            return {...state,
                todoListHoldingReduceTodo: 
                state.todoListHoldingReduceTodo.map(itemTodo=>{
                if(itemTodo.id===finishThatTodoStuffPlease.id){
                    return finishThatTodoStuffPlease;
                }
                return itemTodo;
            }),};
           /* old clunky but that works
           const {text, isCompleted}=payload;
            
            const tempStuffTodo={
                text:text,
                isCompleted:true,
            }
            return state.filter(finishTodo=>finishTodo.text!==text&&finishTodo.isCompleted!==isCompleted).concat(tempStuffTodo);*/
        }
        case LOAD_THE_STUFF_TODO_WITH_PROGRSSION:{
            return {...state, isLoadingThatTodo:true};
        }
        case LOAD_THE_STUFF_TODO_TRUE_SUCCESS:{
            const {reduceTodo} = payload;
            return {...state,
                isLoadingThatTodo:false,
                todoListHoldingReduceTodo:reduceTodo,}
        }
        case LOAD_THE_STUFF_TODO_PAINFUL_FAILURE:{
            return {...state, isLoadingThatTodo:false};
        }
        
        default:
            return state;
    }
    
    
}