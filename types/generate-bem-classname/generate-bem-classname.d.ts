export = generateBEMClassName;
/**
 * @typedef {Object} ModifierDeclaration
 * @property {string} name - Modifier name
 * @property {boolean} condition - Modifier condition, if true, modifier will be added to the bem block
 */
/**
 * @typedef {Object} BEMBlockConfigs
 * @property [block] {string | (undefined | string)[]} - Block name
 * @property [element] {string | (undefined | string)[]} - Element name
 * @property [modifier] {string | ModifierDeclaration | (undefined | string | ModifierDeclaration)[]} - Modifier name
 * @property [extend] {string} - Extend block name, functions like a normal class name and will not be duplicated for each block.
 */
/**
 * ## Generate BEM Class Name
 * This function generates a BEM block class name from the config object, with the following format: `block__element--modifier`.
 *
 * ### Example:
 * ```js
 * generateBEMClassName({
     *  block: 'block',
     *  element: 'element',
     *  modifier: 'modifier',
     *  extend: 'mt-5'
 *  }); // => returns 'block__element block__element--modifier mt-5'
 * ```
 * @param config {BEMBlockConfigs} - The config object where you can specify the block, element, modifier and extensions.
 * @returns {string} - BEM block class name
 */
declare function generateBEMClassName(config: BEMBlockConfigs): string;
declare namespace generateBEMClassName {
    export { ModifierDeclaration, BEMBlockConfigs };
}
type ModifierDeclaration = {
    /**
     * - Modifier name
     */
    name: string;
    /**
     * - Modifier condition, if true, modifier will be added to the bem block
     */
    condition: boolean;
};
type BEMBlockConfigs = {
    /**
     * - Block name
     */
    block?: string | (undefined | string)[];
    /**
     * - Element name
     */
    element?: string | (undefined | string)[];
    /**
     * - Modifier name
     */
    modifier?: string | ModifierDeclaration | (undefined | string | ModifierDeclaration)[];
    /**
     * - Extend block name, functions like a normal class name and will not be duplicated for each block.
     */
    extend?: string;
};
