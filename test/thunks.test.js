import 'node-fetch';
import fetchMock from 'fetch-mock';
import {expect} from 'chai';
import sinon from 'sinon';
import {thunkLoadStuffTodo} from '../src/todo/thunks';

describe('Testing Thunk load stuff todo',()=>{
    it('Dispatch the correct actions if success',()=>{
        //this is how to create fake function with sinon
        const fakeThunkDispatch=sinon.spy();

        //this is fake mock todo, doesn't have to be correct and have same property as real todo
        const fakeThunkTodo=[{dumbtext:'1'},{dumbtext:'2'}];

        /*reroute so that when get request is called, it doesn't actually call the
        get method but it still have to return something, which is the fakeThunkTodo.
        This just seems like a roundabout way so that you can call the function,
        not getting the actual request but still can get the expected return*/
        fetchMock.get('http://localhost:8080/reduceTodo', fakeThunkTodo);
        const expectedFirstAction={type:'LOAD_THE_STUFF_TODO_WITH_PROGRSSION'};
        const expectedSecondAction={
            type:'LOAD_THE_STUFF_TODO_TRUE_SUCCESS',
            payload:{reduceTodo:fakeThunkTodo},};
        //await cannot run outside of async function, so I add async in and it work first try. Actual genius moment
        async()=>{
        await thunkLoadStuffTodo()(fakeThunkDispatch);


        //getCall[0] is first called of fakeDispatch, which is the first dispatch of thunkLoadStuffTodo
        //which is dispatch(loadTheStuffTodoProgress());, check thunks.js
        //args[0] is first argument passed on during first call to fakeThunkDispatch
        expect(fakeThunkDispatch.getCall[0].args[0]).to.deep.equal(expectedFirstAction0);
        expect(fakeThunkDispatch.getCall[1].args[0]).to.deep.equal(expectedSecondAction);

    }
        //since the get function get modified, we need to make the function reset for
        //actual usage
        fetchMock.reset();
    })
})