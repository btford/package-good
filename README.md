# package good [![Build Status](https://travis-ci.org/btford/package-good.svg?branch=master)](https://travis-ci.org/btford/package-good)

naive judge of the quality of a `package.json` for an open source project

## Install
```shell
npm install package-good
```

## Usage

```javascript
var packageGood = require('package-good');

// returns a hash representing % for each category
// 1 is good, 0 is bad
packageGood({ /* parsed package.json here */ });
// -> { maintainers: 1, ... }
```

## License
MIT
