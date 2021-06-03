export const generateTypes = (prefix, action) => {
    return {
        REQUEST: `${prefix}/${action}_REQUEST`,
        SUCCESS: `${prefix}/${action}_SUCCESS`,
        ERROR: `${prefix}/${action}_ERROR`,
    };
};
