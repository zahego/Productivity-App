import { expect} from 'chai';
import {reduceTodo} from '../src/todo/reducers';

describe('This is the test for todo reducers', ()=>{
    it('Adds a new todo item when CREATE_THE_STUFF_TODO action is recieved',()=>{
        const fakeTestReduxTodo={text: 'Test that reducers', isCompleted:false};
        const fakeTestReduxAction={
            type: 'CREATE_THE_STUFF_TODO',
            payload:{
                reduceTodo:fakeTestReduxTodo,
            },};
        const reduxTestOriginalState={isLoadingThatTodo:false, todoListHoldingReduceTodo:[]};
        //expected and actual is just good naming convention. Can actually name anything
        const testReduxExpected={
            isLoadingThatTodo:false,
            todoListHoldingReduceTodo:[fakeTestReduxTodo],
        }
        const testReduxActual=reduceTodo(reduxTestOriginalState, fakeTestReduxAction);
        expect(testReduxActual).to.deep.equal(testReduxExpected);
    });
});