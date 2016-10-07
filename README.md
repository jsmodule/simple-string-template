# simple-string-template
A simple string template.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/simple-string-template.svg)](https://npmjs.org/package/simple-string-template)
[![NPM Downloads](https://img.shields.io/npm/dm/simple-string-template.svg)](https://npmjs.org/package/simple-string-template)
[![Build Status](https://travis-ci.org/jsmodule/simple-string-template.svg?branch=master)](https://travis-ci.org/jsmodule/simple-string-template)

[![NPM](https://nodei.co/npm/simple-string-template.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/simple-string-template/)

## Installation

```
$ npm install simple-string-template
```

## Usage

```js
import SimpleTemplate from 'simple-string-template';

SimpleTemplate.render(templateFile, data);

SimpleTemplate.format(templateString, data);
```

## API

### SimpleTemplate

* **render**

  Defined: `function render(templateFile: String, data: Object): String`

  Describe: Render a template from file with data.

  Examples:

  A template file like this:
  ```
  Hello {{ name }}
  ```

  ```js
  import SimpleTemplate from 'simple-string-template';

  let data = { name: 'World' };
  SimpleTemplate.render(templateFile, data); // return "Hello World"
  ```

* **format**

  Defined: `function format(templateString: String, data: Object): String`

  Describe: Render a template string with data.

  Examples:

  ```js
  import SimpleTemplate from 'simple-string-template';

  let templateString = "Hello {{ name }}";
  let data = { name: 'World' };
  SimpleTemplate.render(templateString, data); // return "Hello World"
  ```

## More

1. If you want custom your format pattern. you can like this:

```js
import SimpleTemplate from 'simple-string-template';

let simpleTemplate = new SimpleTemplate('\\$\\{', '\\}'); // In here must be a String of RegExp.
let data = { name: 'World' };

simpleTemplate.render(templateFile, data);
simpleTemplate.format('Hello ${ name }', data);
```

## License

simple-string-template is released under the MIT license.
