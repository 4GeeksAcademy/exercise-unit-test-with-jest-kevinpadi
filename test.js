// Import the function sum from the app.js file
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.75); 
})

test("One dollar should be 146.26 yen", function() {
    // This is the comparison for the unit test
     expect(fromDollarToYen(1)).toBe(146.26); 
})

test("One yen should be 0.01 punds", function() {
    // This is the comparison for the unit test
     expect(fromYenToPound(1)).toBe(0.01); 
})