let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return Number(valueInDollar.toFixed(2));
}

const fromDollarToYen = function(valueInDollar) {
    const oneDollarToYen = oneEuroIs.JPY / oneEuroIs.USD;
    let valueInYen = valueInDollar * oneDollarToYen;
    return Number(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen) {
    const oneYenToPound = oneEuroIs.GBP / oneEuroIs.JPY;
    let valueInPound = valueInYen * oneYenToPound;
    return Number(valueInPound.toFixed(2));
}

const sum = (a,b) => {
    return a + b
}
console.log(fromYenToPound(1))
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
