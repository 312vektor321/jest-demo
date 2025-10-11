import { createOrder } from './orderService';
import { saveOrder } from './db';

jest.mock('./db', () => ({
    saveOrder: jest.fn()
}));

describe('createOrder function', () => {
    test('should successfully create order with orderId 1', async () => {
        const orderId = 1;
        saveOrder.mockResolvedValue(true);

        const result = await createOrder(orderId);

        expect(result).toEqual({
            orderId: 1,
            saved: true
        });
        expect(saveOrder).toHaveBeenCalledWith(orderId);
    });

    test('should throw error when saveOrder fails', async () => {
        const orderId = 2;
        saveOrder.mockResolvedValue(false);

        await expect(createOrder(orderId))
            .rejects.toThrowError('Failed to save order');
        expect(saveOrder).toHaveBeenCalledWith(orderId);
    });

    test('should call saveOrder with correct orderId', async () => {
        const orderId = 3;
        saveOrder.mockResolvedValue(true);

        await createOrder(orderId);

        expect(saveOrder).toHaveBeenCalledWith(orderId);
        expect(saveOrder).toHaveBeenCalledTimes(1);
    });
});