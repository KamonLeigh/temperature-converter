const assert = require('assert');
const { fahrenheitToCelsius, celsiusTofahrenheit } = require('./index');

// Test fahrenheitToCelsius
assert.strictEqual(fahrenheitToCelsius(32), 0, '32F should be 0');
assert.strictEqual(fahrenheitToCelsius(212), 100, '212F should be 100');

// Test celsiusTofahrenheit
assert.strictEqual(celsiusTofahrenheit(0), 32, '0C should be 32');
assert.strictEqual(celsiusTofahrenheit(100), 212, '100C should be 212');

console.log('All tests passed!');
