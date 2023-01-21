import { describePolarity } from '/src/client/js/formHandler';

describe('Testing describePolarity function', () => {
    test('Polarity describtion to equal Positive', () => {
        expect(describePolarity('P')).toEqual('Positive');
    });

    test('Polarity describtion to equal Neutral', () => {
        expect(describePolarity('NEU')).toEqual('Neutral');
    });

    test('Polarity describtion to equal Negative', () => {
        expect(describePolarity('N')).toEqual('Negative');
    });
});
