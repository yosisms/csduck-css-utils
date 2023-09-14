export type Any = string | number | boolean | null | undefined;
/**
 * @typedef {string | number | boolean | null | undefined} Any
 */
/**
 * # toStringArray
 * This function converts any to string array, while filtering out nullish values.
 * @param v {Any|Array<Any>}
 * @returns {string[]}
 */
export function toStringArray(v: Any | Array<Any>): string[];
