const generateHyphenClassName = require('./generate-hyphen-classname');

describe('generateHyphenClassName', () => {
    test('should generate a hyphenated class name with false condition', () => {
        const config = {
            btn: ['primary', 'large'],
            card: [{ name: 'rounded', condition: false }],
        };
        const result = generateHyphenClassName(config);
        expect(result).toBe('btn btn-primary btn-large card');
    });

    test('should generate a hyphenated class name with true condition', () => {
        const config = {
            btn: ['primary', 'large'],
            card: [{ name: 'rounded', condition: true }],
        };
        const result = generateHyphenClassName(config);
        expect(result).toBe('btn btn-primary btn-large card card-rounded');
    });

    test('should ignore undefined variants', () => {
        const config = {
            btn: ['primary', undefined, 'small'],
        };
        const result = generateHyphenClassName(config);
        expect(result).toBe('btn btn-primary btn-small');
    });

    test('should ignore empty variants', () => {
        const config = {
            btn: ['primary', '', 'small'],
        };
        const result = generateHyphenClassName(config);
        expect(result).toBe('btn btn-primary btn-small');
    });

    test('should ignore variants with empty names', () => {
        const config = {
            btn: [{ name: '', condition: true }, 'primary', 'small'],
        };
        const result = generateHyphenClassName(config);
        expect(result).toBe('btn btn-primary btn-small');
    });

    test('should ignore variants with falsy conditions', () => {
        const config = {
            btn: [{ name: 'secondary', condition: false }, 'primary', 'small'],
        };
        const result = generateHyphenClassName(config);
        expect(result).toBe('btn btn-primary btn-small');
    });

    test('should handle an empty config object', () => {
        const config = {};
        const result = generateHyphenClassName(config);
        expect(result).toBe('');
    });

    test('should handle a config object with no variants', () => {
        const config = {
            btn: [],
            card: [],
        };
        const result = generateHyphenClassName(config);
        expect(result).toBe('btn card');
    });
});
