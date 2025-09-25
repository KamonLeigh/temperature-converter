// Convert Fahrenheit to Celsius
function fahrenheitToCelsius (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Convert Celsius to Fahrenheit
function celsiusTofahrenheit (celsius) {
  return (celsius * 9) / 5 + 32;
}

// Export the conversion functions

module.exports = {
  celsiusTofahrenheit,
  fahrenheitToCelsius
};
