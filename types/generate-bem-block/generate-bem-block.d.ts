export = generateBemBlock;
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
 * # Generate BEM Block
 * @param config {BEMBlockConfigs}
 * @returns {string} - BEM block class name
 */
declare function generateBemBlock(config: BEMBlockConfigs): string;
declare namespace generateBemBlock {
    export { ModifierDeclaration, BEMBlockConfigs };
}
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
