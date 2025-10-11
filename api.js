export const fetchPost = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, title: 'First Post' });
            } else {
                reject(new Error('Post not found'));
            }
        }, 1000);
    });
};