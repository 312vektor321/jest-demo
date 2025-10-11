export const processData = ({ name, score }) => {
    if (typeof name !== 'string') throw new Error('Name must be a string');
    if (typeof score !== 'number') throw new Error('Score must be a number');
    return { name, score, status: score >= 50 ? 'pass' : 'fail' };
};

export const restrictLength = (str, maxLength) => {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
};
