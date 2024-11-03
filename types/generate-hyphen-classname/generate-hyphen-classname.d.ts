export = generateHyphenClassName;
/**
 * @typedef {Object} VariantDeclaration
 * @property {string} name - Variant name
 * @property {string} condition - Variant condition
 */
/**
 * # HyphenBlockConfigs
 * This form allows you to add a custom validation and name if you want to add a variant to the block.
 * @typedef {Record<string,Array<string | undefined | VariantDeclaration>>} HyphenBlockConfigs
 */
/**
 * # Generate Hyphen Class Name
 * This function takes a record of classes and for each class, it will take the variants and create another class with hyphenated variants if its not undefined or if there is a condition and its falsy.
 *
 * ### Example:
 * ```js
 * generateHyphenClassName({
 *    btn: ['primary', { name: 'lg', condition: window.innerWidth > 768 }]
 * }); // => returns 'btn btn-primary' and if window.innerWidth > 768 it will return 'btn btn-primary btn-lg'
 * ```
 *
 * ### undefined use case:
 * This function allows you to pass undefined for simple use case so you dont need to validate variants before passing them to this function. for example:
 * const color = 'primary', size = undefined;
 * - generateHyphenClassName({ btn: [color, size] }) => 'btn btn-primary' (size is undefined so it will be ignored)
 * @param {HyphenBlockConfigs} config
 * @param {string} [extend]
 * @returns {string} - Hyphenated class name
 */
declare function generateHyphenClassName(config: HyphenBlockConfigs, extend?: string): string;
declare namespace generateHyphenClassName {
    export { VariantDeclaration, HyphenBlockConfigs };
}
type VariantDeclaration = {
    /**
     * - Variant name
     */
    name: string;
    /**
     * - Variant condition
     */
    condition: string;
};
/**
 * # HyphenBlockConfigs
 * This form allows you to add a custom validation and name if you want to add a variant to the block.
 */
type HyphenBlockConfigs = Record<string, Array<string | undefined | VariantDeclaration>>;
