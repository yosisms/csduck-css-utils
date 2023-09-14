const { toStringArray } = require('../utils');

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
 * # Generate BEM Class Name
 * @param config {BEMBlockConfigs}
 * @returns {string} - BEM block class name
 */
function generateBEMClassName(config) {
    // turn the block, element and modifier into arrays:
    const blocks = toStringArray(config.block);
    const elements = toStringArray(config.element);
    const modifiers = generateModifierArray(config.modifier);
    const extensions = toStringArray(config.extend);

    /** @type {string[]} */
    const classNames = [];

    // for each block create bem block class names:
    blocks.forEach((block) => {

        if(elements && elements.length > 0) {
            elements.forEach((element) => {
                if (element) {
                    classNames.push(`${block}${element ? `__${element}` : ''}`);
                } else {
                    classNames.push(block);
                }

                modifiers.forEach((modifier) => {
                    if (modifier) {
                        classNames.push(`${block}${element ? `__${element}` : ''}${modifier ? `--${modifier}` : ''}`);
                    }
                });
            });
        } else {
            classNames.push(block);
            modifiers.forEach((modifier) => {
                if (modifier) {
                    classNames.push(`${block}${modifier ? `--${modifier}` : ''}`);
                }
            });
        }
    });

    extensions.forEach((extension) => {
        if (extension) {
            classNames.push(extension);
        }
    });

    return classNames.join(' ').trim();
}

/**
 * # Generate Modifier Array
 * This function converts modifier declarations to string array.
 * @param modifier {string | ModifierDeclaration | (undefined | string | ModifierDeclaration)[]} - Modifier name
 * @returns {string[]}
 */
function generateModifierArray(modifier) {
    if (!modifier) {
        return [];
    }

    if (typeof modifier === 'string') {
        return [modifier];
    }

    if (Array.isArray(modifier)) {
        return modifier.map((mod) => generateModifierArray(mod)).flat();
    }

    if (modifier.condition && modifier.name) {
        return [modifier.name];
    }

    return [];
}

module.exports = generateBEMClassName;