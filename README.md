<h1 align="center">css-vars-from-json</h1>
<h3 align="center">Generates css custom properties (variables) from json or javascript object.</h3>
<p align="center">
  <a href="https://github.com/TimoBechtel/css-vars-from-json/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/TimoBechtel/css-vars-from-json">Homepage</a>
  ·
  <a href="https://github.com/TimoBechtel/css-vars-from-json/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [About](#About)
- [Installation](#Install)
- [Usage](#Usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## About

This small utility generates a style string with css custom properties (variables) from an javascript object or json string.

It is useful, if you have a styled theme defined as json object and want to use it in your css.

For example,

```json
{
	"font": {
		"family": {
			"primary": "Inter"
		}
	}
}
```

can be used as,

```css
p {
	font-family: var(--font-family-primary);
}
```

## Install

### NPM:

```sh
yarn add css-vars-from-json
```

## Usage

```js
import cssVars from 'css-vars-from-json';

const theme = cssVars({
	colors: {
		primary: 'red',
		secondary: 'blue',
	},
	shadows: {
		main: 'box-shadow: 1px 1px black',
	},
	font: {
		family: {
			primary: 'Arial',
		},
	},
});

document.body.setAttribute('style', theme);

console.log(theme);
// => "--colors-primary: red;--colors-secondary: blue;--shadows-main: box-shadow: 1px 1px black;--font-family-primary: Arial;"
```

## Run tests

```sh
yarn run test
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/TimoBechtel/css-vars-from-json/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `yarn run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/TimoBechtel/css-vars-from-json/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
