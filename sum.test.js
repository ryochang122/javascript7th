const { test, expect } = require('@jest/globals');
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(1,2)).toBe(3);
});
test('2 ** 3 to equal 8', () =>{
    expect(sum.sample(2,3)).toBe(8);
});