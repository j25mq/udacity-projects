import { validateURL } from '/src/client/js/urlChecker';

describe('Testing the validateURL function...', () => {
    test('This URL is valid (correct url format):', () => {
        expect(validateURL('https://www.udacity.com/')).toBe(true);
    });

    test('This URL is invalid (missing url format):', () => {
        expect(validateURL('udacity')).toBe(false);
    });

    test('This URL is invalid (space added):', () => {
        expect(validateURL('https://www.uda city.com/')).toBe(false);
    });

    test('This URL is invalid (missing www):', () => {
        expect(validateURL('udacity.com/')).toBe(false);
    });
});
