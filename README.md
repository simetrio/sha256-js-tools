sha256-js-tools
=========

[![NPM Version](http://img.shields.io/npm/v/sha256-js-tools.svg?style=flat)](https://www.npmjs.com/package/sha256-js-tools)

Generate sha256 hashes

## Demo

[Online SHA256](https://www.olrix.net/tools/sha256-generator/)

## With npm

### Install

```shell
$ npm install --save sha256-js-tools
```

### Import

```javascript
import { SHA256 } from "sha256-js-tools";
```

or

```javascript
const { SHA256 } = require("sha256-js-tools");
```

## In web browsers 

```javascript
<script src="sha256.min.js"></script>
```

or

```javascript
<script src="https://cdn.jsdelivr.net/gh/simetrio/sha256-js-tools@1.0.0/sha256.min.js"></script>
```

## Usage

### Work

```javascript
SHA256.work("Hellow World!!!");    //  Hellow World!!!
```