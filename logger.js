export const logMessage = (message) => {
    if (!message) {
        console.log('Empty message');
        return 'Error: No message';
    }
    console.log(`Message: ${message}`);
    return `Logged: ${message}`;
};