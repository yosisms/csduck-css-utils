const generateBemBlock = require('./generate-bem-block.js'); // Replace 'yourModule' with the actual module name where your function is defined

describe('generateBemBlock', () => {
    test('should generate BEM block with only block and modifier', () => {
        const className = generateBemBlock({
            block: 'button',
            modifier: 'primary',
        });
        expect(className).toBe('button button--primary');
    });

    test('should generate BEM block with block, element, and modifier', () => {
        const className = generateBemBlock({
            block: 'card',
            element: 'header',
            modifier: 'large',
        });
        expect(className).toBe('card__header card__header--large');
    });

    test('should generate BEM block with multiple blocks and modifiers', () => {
        const className = generateBemBlock({
            block: ['button', 'card'],
            modifier: ['primary', 'large'],
        });
        expect(className).toBe('button button--primary button--large card card--primary card--large');
    });

    test('should generate BEM block with extension class', () => {
        const className = generateBemBlock({
            block: 'button',
            modifier: 'primary',
            extend: 'custom-button',
        });
        expect(className).toBe('button button--primary custom-button');
    });

    test('should generate BEM block with block, element, modifier, and extension', () => {
        const className = generateBemBlock({
            block: 'card',
            element: 'header',
            modifier: 'large',
            extend: 'custom-card',
        });
        expect(className).toBe('card__header card__header--large custom-card');
    });

    test('should handle empty input', () => {
        const className = generateBemBlock({});
        expect(className).toBe('');
    });
});