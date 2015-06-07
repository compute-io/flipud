'use strict';

var matrix = require( 'dstructs-matrix' ),
	flipud = require( './../lib' );

var data,
	mat,
	ud, i;

data = new Int8Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}

mat = matrix( data, [5,2], 'int8' );
console.log( mat.toString() );
// returns '0,1;2,3;4,5;6,7;8,9'

ud = flipud( mat );
console.log( ud.toString() );
// returns '8,9;6,7;4,5;2,3;0,1'


