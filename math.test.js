const { add } = require('./math');

test('dodaje 2 + 3 i daje 5', () => {
    expect(add(2, 3)).toBe(5);
});