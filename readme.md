# css-units-list

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/css-units-list.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/css-units-list
[license_badge]: https://img.shields.io/npm/l/css-units-list.svg?style=flat-square
[license_link]: https://github.com/fisker/css-units-list/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/css-units-list.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/css-units-list

> List of CSS:Cascading Style Sheets Units

Data from [CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/)

## Install

```bash
yarn add css-units-list
```

## Usage

```js
import cssUnits from 'css-units-list'

console.log(cssUnits)

// => [ 'em', 'rem', 'ex', 'rex', 'cap', 'rcap', ...]
```

```js
import {
  fontRelativeLengths,
  viewportPercentageLengths,
  relativeLengths,
  absoluteLengths,
  angleUnits,
  durationUnits,
  frequencyUnits,
  resolutionUnits,
  containerRelativeLengths,
  containerQueryLengthUnits, // Alias of `containerRelativeLengths`
  flexibleLengths,
} from 'css-units-list'
```
