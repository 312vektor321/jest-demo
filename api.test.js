import { fetchPost } from './api.js';

describe('fetchPost function', () => {
    test('should successfully fetch post with id 1', async () => {
        const postId = 1;

        const result = await fetchPost(postId);

        expect(result).toEqual({
            id: 1,
            title: 'First Post'
        });
    });

    test('should throw error for unknown id', async () => {
        const postId = 999;

        await expect(fetchPost(postId)).rejects.toThrow('Post not found');
    });

    test('should have title with correct length', async () => {
        const postId = 1;

        const result = await fetchPost(postId);

        expect(result.title).toHaveLength(10);
    });
});