import { handleSubmit } from "../src/client/js/formHandler";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests
describe('Testing describePolarityScore function', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    // Define the input for the function, if any, in the form of variables/array
    // Define the expected output, if any, in the form of variables/array
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    test('Polarity describtion to equal Strong Positive', () => {
        expect(describePolarityScore('P+')).toEqual('Strong Positive');
    });
    test('Polarity describtion to equal Positive', () => {
        expect(describePolarityScore('P')).toEqual('Positive');
    });
    test('Polarity describtion to equal Neutral', () => {
        expect(describePolarityScore('NEU')).toEqual('Neutral');
    });
    test('Polarity describtion to equal Negative', () => {
        expect(describePolarityScore('N')).toEqual('Negative');
    });
    test('Polarity describtion to equal Strong Negative', () => {
        expect(describePolarityScore('N+')).toEqual('Strong Negative');
    });
});