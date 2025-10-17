export function truncateString(str, limit) {
    if (limit < 0) {
        throw new Error('Limit must be non-negative');
    }

    if (str.length <= limit) {
        return str;
    }

    return str.slice(0, limit) + '...';
}

