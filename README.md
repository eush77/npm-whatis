[![npm](https://nodei.co/npm/npm-whatis.png)](https://npmjs.com/package/npm-whatis)

# npm-whatis

[![Dependency Status][david-badge]][david]

Describe a package in one sentence (or more).

[david]: https://david-dm.org/eush77/npm-whatis
[david-badge]: https://david-dm.org/eush77/npm-whatis.png

## Usage

```
$ npm-whatis life
life                 - An artificial life simulation in node.
```

## CLI

### `npm-whatis <package>`

Prints package description.

Equivalent to `npm v <package> description`.

## API

### `whatis(packageName, cb(err, description))`

Requests http://npmjs.com for package description and returns it.

## Install

```
npm install -g npm-whatis
```

## License

MIT
