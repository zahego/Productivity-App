//basically a function that return another function, so high order func?
//dispatch thunk is nearly identical to how dispatch an actions
import{loadTheStuffTodoProgress,
    loadTheStuffTodoTrueSuccess,
    loadTheStuffTodoPainfulFailure,
    createStuffTodo, 
    removeStuffTodo,
    finishStuffTodo} from './actions';

const ENDPOINT="https://productivity-app-server.herokuapp.com/";

export const thunkLoadStuffTodo=()=>
async(dispatch, getState)=>{
    try{
    dispatch(loadTheStuffTodoProgress());
    //the reduceTodo at the end of fetch('http://localhost:8080/reduceTodo') can only be change by entering the server and change it there
    //at server.js in react-ecosystem-server
    //http://localhost:8080/reduceTodo
    const response =await fetch(`${ENDPOINT}/reduceTodo`);
    const reduceTodo=await response.json();

    dispatch(loadTheStuffTodoTrueSuccess(reduceTodo));
    }
    catch(e){
    dispatch(loadTheStuffTodoPainfulFailure());
    dispatch(thunkDisplayAlert(e));
    }
}

export const thunkCreateThatTodo=text=>
async dispatch=>{
    try{
        //body is a return props in server.js post method
        const body=JSON.stringify({text});
        const response =await fetch(`${ENDPOINT}/reduceTodo/`,{
            headers:{'Content-Type': 'application/json',},
            method:'post',
            body,});
        //insertedTodo is in server.js
        const insertedTodo=await response.json();
        dispatch(createStuffTodo(insertedTodo));
    }
    catch(e){
        dispatch(thunkDisplayAlert(e));
    }
}


//id is a field return in react-ecosystem-server/server.js
export const thunkRemoveThatTodo=id=>
async dispatch=>{
    try{
        
        const response =await fetch(`${ENDPOINT}/reduceTodo/${id}`,{method:'delete'});
        //removedtodo is in server.js
        const removedTodo=await response.json();
        dispatch(removeStuffTodo(removedTodo));
    }
    catch(e){
        dispatch(thunkDisplayAlert(e));
    }
}

export const thunkFinishThatTodo=id=>
async dispatch=>{
    try{
        const response =await fetch(`${ENDPOINT}/reduceTodo/${id}/completed`,{ method:'post'});
        //updatedTodo is in server.js
        const updatedTodo=await response.json();
        //remember to change the method here. Almost still keep it as createStuffTodo
        dispatch(finishStuffTodo(updatedTodo));
    }
    catch(e){
        dispatch(thunkDisplayAlert(e));
    }
}

export const thunkDisplayAlert =(text)=>{
    alert(`The error is: ${text}`);
}