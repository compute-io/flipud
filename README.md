flipud
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Flips a [matrix](https://github.com/dstructs/matrix) from top-to-bottom.


## Installation

``` bash
$ npm install compute-flipud
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var flipud = require( 'compute-flipud' );
```

#### flipud( x[, opts] )

Flips a [matrix](https://github.com/dstructs/matrix) from top-to-bottom.

``` javascript
var matrix = require( 'dstructs-matrix' );

var mat = matrix( [2,3] );
mat.set( 1, 0, 1 )
	.set( 0, 1, 2 )
	.set( 1, 2, 3 );
/*
	[ 0 2 0
	  1 0 3 ]
*/

var ud = flipud( mat );
/*
	[ 1 0 3
	  0 2 0 ]
*/
```

By default, the function returns a new [matrix](https://github.com/dstructs/matrix) instance. To mutate the input [matrix](https://github.com/dstructs/matrix), set the `copy` option to `false`.

``` javascript
var ud = flipud( mat, {
	'copy': false
});
/*
	[ 1 0 3
	  0 2 0 ]
*/

var bool = ( mat === ud );
// returns true
```



## Examples

``` javascript
var matrix = require( 'dstructs-matrix' ),
	flipud = require( 'compute-flipud' );

var data,
	mat,
	ud, i;

data = new Int8Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}

mat = matrix( data, [5,2], 'int8' );
/*
	[ 0 1
	  2 3
	  4 5
	  6 7
	  8 9 ]
*/

ud = flipud( mat );
/*
	[ 8 9
	  6 7
	  4 5
	  2 3
	  0 1 ]
*/
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-flipud.svg
[npm-url]: https://npmjs.org/package/compute-flipud

[travis-image]: http://img.shields.io/travis/compute-io/flipud/master.svg
[travis-url]: https://travis-ci.org/compute-io/flipud

[coveralls-image]: https://img.shields.io/coveralls/compute-io/flipud/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/flipud?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/flipud.svg
[dependencies-url]: https://david-dm.org/compute-io/flipud

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/flipud.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/flipud

[github-issues-image]: http://img.shields.io/github/issues/compute-io/flipud.svg
[github-issues-url]: https://github.com/compute-io/flipud/issues
