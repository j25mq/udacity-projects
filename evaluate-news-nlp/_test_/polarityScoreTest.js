import { describePolarityScore } from '../src/client/js/formHandler';

describe('Testing describePolarityScore function', () => {
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
