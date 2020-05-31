import {expect} from 'chai';
import {getBorderDateForTest} from '../src/todo/ListItem';

describe('Testing styled component with border',()=>{
    it('Return none when date is less than five days ago',()=>{
        const today=Date.now();
        const fiveDaysAgo=new Date(Date.now()-8640000*3);
        const expectBorder='none';
        const actualBorder=getBorderDateForTest(fiveDaysAgo, today);
        expect(actualBorder).to.deep.equal(expectBorder);
    });
    it('Reeturn a border vice versa',()=>{
        const today=Date.now();
        const fiveDaysAgo=new Date(Date.now()-8640000*7);
        const expectBorder='3px solid red';
        const actualBorder=getBorderDateForTest(fiveDaysAgo, today);
        expect(actualBorder).to.deep.equal(expectBorder);
    });
});