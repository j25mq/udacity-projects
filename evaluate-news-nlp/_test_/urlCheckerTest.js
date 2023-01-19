import { checkUrl } from '../src/client/js/urlChecker';

describe('Testing the checkUrl function', () => {
    test('Testing a valid url', () => {
        expect(checkUrl('https://www.udacity.com/')).toBe(true);
    });

    test('Testing invalid url', () => {
        expect(checkUrl('udacity')).toBe(false);
    });

    test('Testing url with space', () => {
        expect(checkUrl('https://www.udacity.com/')).toBe(false);
    });

    test('Testing url without www', () => {
        expect(checkUrl('udacity.com/')).toBe(false);
    });
});
