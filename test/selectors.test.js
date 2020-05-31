import {expect} from 'chai';
import {reselectGetCompleteReduceTodo} from '../src/todo/selectors';

describe('Testing selector get completed reduxTodo function',()=>{
    it('Return on the completed redux todo',()=>{
        const fakeTestReduxTodo=
        [{text: 'Test that selector', isCompleted:true},
        {text: 'Test that selector second time', isCompleted:false},
        {text: 'Test that selector third time', isCompleted:false}];
        
        //expected and actual is just good naming convention. Can actually name anything
        const testSelectorExpected=[{
            text: 'Test that selector', isCompleted:true
        }]
        const testSelectorActual=reselectGetCompleteReduceTodo.resultFunc(fakeTestReduxTodo);
        expect(testSelectorActual).to.deep.equal(testSelectorExpected);
    });
});