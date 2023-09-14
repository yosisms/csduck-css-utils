/**
 * @typedef {string | number | boolean | null | undefined} Any
 */

/**
 * # toStringArray
 * This function converts any to string array, while filtering out nullish values.
 * @param v {Any|Array<Any>}
 * @returns {string[]}
 */
function toStringArray (v) {
    switch(typeof v) {
        case 'string':
            return [v];
        case 'number':
        case 'boolean':
            return [v.toString()];
        case 'object':
            if (Array.isArray(v)) {
                return v.map(toStringArray).flat();
            }
            return [];
        default:
            return [];
    }
}

module.exports = {
    toStringArray
}