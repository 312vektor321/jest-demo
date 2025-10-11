import { processData, restrictLength } from "./utils.js";

describe('processData function', () => {
    test('should return status pass when score is 50 or more', () => {
        const inputData = { name: 'John', score: 55 };

        const result = processData(inputData);

        expect(result).toEqual({
            name: 'John',
            score: 55,
            status: 'pass'
        });
    });

    test('should return fail when score is less than 50', () => {
        const input = { name: 'Jane', score: 45 };

        const result = processData(input);

        expect(result).toEqual({
            name: 'Jane',
            score: 45,
            status: 'fail'
        });
    });

    test('should throw error when name is not a string', () => {
        const input = { name: 123, score: 50 };

        expect(() => {
            processData(input);
        }).toThrow("Name must be a string");
    });

    test('should return object with 3 properties', () => {
        const input = { name: 'Alex', score: 60 };

        const result = processData(input);

        expect(Object.keys(result).length).toBe(3);
    })
})

describe('restrictLength function', () => {

    test.each(
        [
            ['Hello', 5, 'Hello'],        // строка равна maxLength
            ['Hello World', 5, 'Hello...'], // строка длиннее maxLength
            ['Short', 10, 'Short'],       // строка короче maxLength
            ['Testing123456', 10, 'Testing123...'], // обрезка в середине
            ['A', 1, 'A'],                // один символ
        ]
    )(
        'should truncate string "%i" to length %i resulting in "%p"',
        (input, maxLength, expected) => {

            const result = restrictLength(input, maxLength);

            expect(result).toBe(expected);
        }
    );
});

describe('Error handling tests', () => {

    test.each([
        [123, 10],        // число
        [null, 10],       // null
        [undefined, 10],  // undefined
        [true, 10],       // boolean
        [[], 10],         // массив
        [{}, 10],         // объект
        [() => { }, 10]    // функция
    ])(
        'should throw error for no string input %p',
        (input, maxLength) => {
            // Arrange

            // Act & Assert
            expect(() => {
                restrictLength(input, maxLength);
            }).toThrow('Input must be a string');
        }
    );
});
