'use strict';

// MODULES //

var isMatrixLike = require( 'validate.io-matrix-like' ),
	ctors = require( 'compute-array-constructors' ),
	validate = require( './validate.js' );


// FLIPUD //

/**
* FUNCTION: flipud( matrix[, options] )
*	Flips a matrix vertically.
*
* @param {Matrix} matrix - input matrix
* @param {Object} [options] - function options
* @param {Boolean} [options.copy=true] - boolean indicating whether to return a new Matrix instance
* @returns {Matrix} flipped matrix
*/
function flipud( mat, options ) {
	/* jshint newcap:false */
	var opts,
		ctor,
		err,
		d, o, s, sh,
		m, i;

	if ( !isMatrixLike( mat ) ) {
		throw new TypeError( 'flipud()::invalid input argument. First argument must be a matrix. Value: `' + mat + '`.' );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		opts.copy = true;
	}
	if ( opts.copy ) {
		// Copy the matrix data to a new typed array:
		ctor = ctors( mat.dtype );
		d = new ctor( mat.data );

		// Update the strides:
		s = [ -mat.strides[0], mat.strides[1] ];

		// Update the offset...
		o = 0;
		for ( i = 0; i < mat.ndims; i++ ) {
			if ( s[ i ] < 0 ) {
				o -= ( mat.shape[i]-1 ) * s[ i ];
			}
		}
		// Copy the shape:
		sh = [ mat.shape[0], mat.shape[1] ];

		// Create a new matrix:
		m = new mat.constructor( d, mat.dtype, sh, o, s );

		// Return the new matrix:
		return m;
	} else {
		mat.strides[ 0 ] *= -1;
		o = 0;
		for ( i = 0; i < mat.ndims; i++ ) {
			if ( mat.strides[ i ] < 0 ) {
				o -= ( mat.shape[i]-1 ) * mat.strides[ i ];
			}
		}
		mat.offset = o;
		return mat;
	}
} // end FUNCTION flipud()


// EXPORTS //

module.exports = flipud;
