const { getMaxDecimalPlaces } = require("./utils")

/**
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function sum(num1, num2) {
    const decimalPlaces = getMaxDecimalPlaces(num1, num2);
    const multiple = 10 ** decimalPlaces;
    
    return (num1 * multiple + num2 * multiple) / multiple;
}

/**
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function subtract(num1, num2) {
    const decimalPlaces = getMaxDecimalPlaces(num1, num2);
    const multiple = 10 ** decimalPlaces;

    return (num1 * multiple - num2 * multiple) / multiple
}


module.exports = {
    sum,
    subtract
}