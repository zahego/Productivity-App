//basically a function that return another function, so high order func?
//dispatch thunk is nearly identical to how dispatch an actions
import{loadTheStuffTodoProgress,loadTheStuffTodoTrueSuccess,loadTheStuffTodoPainfulFailure} from './actions';

export const thunkLoadStuffTodo=()=>
async(dispatch, getState)=>{
    try{
    dispatch(loadTheStuffTodoProgress());
    //the reduceTodo at the end of fetch('http://localhost:8080/reduceTodo') can only be change by entering the server and change it there
    //at server.js in react-ecosystem-server
    const response =await fetch('http://localhost:8080/reduceTodo');
    const reduceTodo=await response.json();

    dispatch(loadTheStuffTodoTrueSuccess(reduceTodo));
    }
    catch(e){
    dispatch(loadTheStuffTodoPainfulFailure());
    dispatch(thunkDisplayAlert(e));
    }
}

export const thunkDisplayAlert =(text)=>{
    alert(`The error is: ${text}`);
}