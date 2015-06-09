/* global require, describe, it, beforeEach */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ).raw,

	// Module to be tested:
	flipud = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-flipud', function tests() {

	var mat;

	beforeEach( function before() {
		var data, i;

		data = new Int8Array( 10 );
		for ( i = 0; i < data.length; i++ ) {
			data[ i ] = i;
		}
		mat = matrix( data, [5,2], 'int8' );
	});

	it( 'should export a function', function test() {
		expect( flipud ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is not matrix-like', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				flipud( value );
			};
		}
	});

	it( 'should throw an error if provided an options argument which is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				flipud( mat, value );
			};
		}
	});

	it( 'should flip a matrix vertically', function test() {
		var nRows,
			nCols,
			ud,
			i, j;

		ud = flipud( mat );

		nRows = ud.shape[ 0 ];
		nCols = ud.shape[ 1 ];

		assert.notEqual( mat, ud );

		for ( i = 0; i < nRows; i++ ) {
			for ( j = 0; j < nCols; j++ ) {
				assert.strictEqual( ud.get( i, j ), mat.get( nRows-i-1, j ) );
			}
		}
	});

	it( 'should flip and mutate the input matrix', function test() {
		var nRows,
			nCols,
			copy,
			ud,
			i, j;

		copy = matrix( mat.data, mat.shape, mat.dtype );

		ud = flipud( mat, {
			'copy': false
		});

		nRows = ud.shape[ 0 ];
		nCols = ud.shape[ 1 ];

		assert.strictEqual( mat, ud );

		for ( i = 0; i < nRows; i++ ) {
			for ( j = 0; j < nCols; j++ ) {
				assert.strictEqual( ud.get( i, j ), copy.get( nRows-i-1, j ) );
			}
		}
	});

});
