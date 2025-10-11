import { divide } from './math.js';
import { calculateDiscount } from './math.js';

describe('Функция деления', () => {
    test('Должна корректно делить положительные числа', () => {
        const a = 6;
        const b = 2;
        const result = divide(a, b);
        expect(result).toBe(3);
    });

    test('Должна выбрасывать ошибку при делении на ноль', () => {
        const a = 6;
        const b = 0;

        expect(() => divide(a, b)).toThrow("Division by zero");
    });

    test('Должна корректно делить отрицательные числа', () => {
        const a = -6;
        const b = 2;
        const result = divide(a, b);
        expect(result).toBe(-3);
    });
});

describe('calculateDiscount function', () => {
    test('should throw error for non-number amount', () => {
        const invalidAmounts = ['string', {}, [], true, null, undefined];

        invalidAmounts.forEach(invalidAmount => {
            expect(() => calculateDiscount(invalidAmount, 'regular'))
                .toThrow('Amount must be a number');
        });
    });

    test('should throw error for non-string customerType', () => {
        const invalidTypes = [123, {}, [], true, null, undefined];

        invalidTypes.forEach(invalidType => {
            expect(() => calculateDiscount(100, invalidType))
                .toThrow('Customer type must be a string');
        });
    });

    test('should return 0 for negative amount', () => {
        const negativeAmounts = [-1, -10, -100];

        negativeAmounts.forEach(amount => {
            expect(calculateDiscount(amount, 'regular')).toBe(0);
        });
    });

    //Проверка скидок для разных типов клиентов
    const discountCases = [
        [100, 'regular', 10],    // regular клиент
        [100, 'premium', 20],    // premium клиент
        [100, 'unknown', 0],     // неизвестный тип
        [0, 'regular', 0],       // нулевая сумма
        [0, 'premium', 0],       // нулевая сумма
    ];

    test.each(discountCases)(
        'should calculate discount for amount: %p, type: %p',
        (amount, customerType, expected) => {

            const result = calculateDiscount(amount, customerType);

            expect(result).toBe(expected);
        }
    );
});
