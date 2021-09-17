const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('add 6+2 to equal 8' ,()=>{
    expect(sum(6,2)).toBe(8);
});