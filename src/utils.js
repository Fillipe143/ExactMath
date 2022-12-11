/**
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function getMaxDecimalPlaces(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    const num1NumberPlaces = strNum1.includes(".")
        ? strNum1.split(".")[1].length
        : 0;

    const num2NumberPlaces = strNum2.includes(".")
        ? strNum2.split(".")[1].length
        : 0;

    return Math.max(num1NumberPlaces, num2NumberPlaces);
}

module.exports = {
    getMaxDecimalPlaces
}