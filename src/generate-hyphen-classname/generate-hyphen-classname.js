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
 * @param config {HyphenBlockConfigs}
 * @returns {string} - Hyphenated class name
 */
function generateHyphenClassName(config) {
    /** @type {string[]} */
    const classNames = [];

    Object.keys(config).forEach((block) => {
        // push block to the classNames array:
        classNames.push(block);

        const variants = config[block];
        // for each variant, validate and push to the classNames array in hyphenated form:
        variants.forEach((variant) => {
            if(!variant || variant === '' || variant?.name === '') return;

            if(typeof variant === 'string') {
                classNames.push(`${block}-${variant}`);
            }

            if(typeof variant === 'object') {
                const { name, condition } = variant;
                if(!!condition && !!name) {
                    classNames.push(`${block}-${name}`);
                }
            }
        });
    });

    return classNames.join(' ').trim();
}

module.exports = generateHyphenClassName;

