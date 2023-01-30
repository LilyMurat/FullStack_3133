const assert = require('chai').assert;
const Calculator = require('../app/calculator');

describe('Calculator', function () {

    it('add(5, 2) expected result 7', function () {
        assert.equal(Calculator.add(5, 2), 7);
    })
    it('add(5,2) expected result 8', function () {
        assert.equal(Calculator.add(5, 2), 8);
    })


    it('sub(5, 2) expected result 3', function () {
        assert.equal(Calculator.sub(5, 2), 3);
    })
    it('sub(5,2) expected result 5', function () {
        assert.equal(Calculator.sub(5, 2), 5);
    })


    it('mul(5, 2) expected result 10', function () {
        assert.equal(Calculator.mul(5, 2), 10);
    })
    it('mul(5,2) expected result 12', function () {
        assert.equal(Calculator.mul(5, 2), 12);
    })


    it('div(10, 2) expected result 5', function () {
        assert.equal(Calculator.div(10, 2), 5);
    })
    it('div(10,2) expected result 2', function () {
        assert.equal(Calculator.div(10, 2), 2);
    })
});
