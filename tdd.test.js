import { truncateString } from './ttd'

describe('truncateString function', () => {

    test('should return string as is if length is less than limit', () => {
        const str = 'Hello';
        const limit = 10;

        const result = truncateString(str, limit);


        expect(result).toBe(str);
    });

    test('should truncate string and add "..." if length exceeds limit', () => {
        const str = 'Hello, world!';
        const limit = 5;
        const expected = 'Hello...';

        const result = truncateString(str, limit);

        expect(result).toBe(expected);
    });

    test('should return empty string if input is empty', () => {
        const str = '';
        const limit = 5;

        const result = truncateString(str, limit);

        expect(result).toBe('');
    });
});