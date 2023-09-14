# @csduck/css-utils

**@csduck/css-utils** is a JavaScript library that provides utility functions for generating CSS class names in both BEM (Block, Element, Modifier) and hyphenated conventions. This library is part of the **csduck libraries collection**.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
    - [BEM (Block, Element, Modifier) Convention](#bem-block-element-modifier-convention)
    - [Hyphenated Convention](#hyphenated-convention)
- [Contribution](#contribution)
- [License](#license)

## Installation

You can install this library using npm or yarn:

```shell
npm install @csduck/css-utils
# or
yarn add @csduck/css-utils
```

## Usage
### BEM (Block, Element, Modifier) Convention
`generateBEMClassName(config: BEMBlockConfigs): string`

The `generateBEMClassName` function generates BEM block class names based on the provided configuration. It follows the BEM convention, which consists of blocks, elements, and modifiers, all separated by double underscores (`__`) and double hyphens (`--`).

Example:

```javascript
const classNames = generateBEMClassName({
  block: 'block',
  element: 'element',
  modifier: 'modifier',
  extend: 'mt-5',
});

// Result: 'block__element block__element--modifier mt-5'
```

### Hyphenated Convention
`generateHyphenClassName(config: HyphenBlockConfigs): string`
The `generateHyphenClassName` function generates class names using a hyphenated convention. It takes a configuration object where you can specify variants for each block. Variants are hyphenated to the block name if they are not `undefined` or if a condition is met.

Example:

```javascript
const classNames = generateHyphenClassName({
  btn: ['primary', { name: 'lg', condition: window.innerWidth > 768 }],
});

// Result: 'btn btn-primary' (default) or 'btn btn-primary btn-lg' (window.innerWidth > 768)
```

**note:** In the hyphenated convention, class names use kebab-case (hyphen-separated) instead of camelCase (js variables naming convention).

## Contribution
Contributions and bug reports are welcome! Feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/yosisms/csduck-css-utils).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.