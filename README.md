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
<script src="https://cdn.jsdelivr.net/npm/sha256-js-tools@1.0.2/lib/sha256.min.js"></script>
```

## Usage

```javascript
SHA256.generate("fvp-_few0dew^&FE^Efew");   //  24b08156b54d1a07776794c4679395b4264b8ea539aaca7cd21b3eabc53024b9
SHA256.generate("cds&9_+c");                //  ba5f73557be57db837cbd689f3b49cd57ec9e3dc936354dbaabda52881debc63
```