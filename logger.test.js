import { logMessage } from './logger.js';

describe('logMessage function', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    test('should log valid message', () => {
        const message = 'Hello World';

        const result = logMessage(message);

        expect(consoleLogSpy).toHaveBeenCalledWith(`Message: ${message}`);
        expect(result).toEqual(`Logged: ${message}`);
    });

    test('should handle empty message', () => {
        const message = '';

        const result = logMessage(message);

        expect(consoleLogSpy).toHaveBeenCalledWith('Empty message');
        expect(result).toEqual('Error: No message');
    });

    test('should use custom console.log implementation', () => {
        const message = 'Custom Test';
        consoleLogSpy.mockImplementation((text) => {
        });

        const result = logMessage(message);

        expect(consoleLogSpy).toHaveBeenCalledWith(`Message: ${message}`);
        expect(result).toEqual(`Logged: ${message}`);
    });
});
