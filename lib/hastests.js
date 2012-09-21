// add tests for further boilerplates

/*global define:false*/

;(function( window, undefined ) {
  var freeExports = false;
  if ( typeof exports === 'object' ) {
    console.log( 'exports', typeof exports );
    freeExports = exports;
    if ( exports && typeof global === 'object' && global && global === global.global ) { window = global; }
  }

  var defineModule = function( has ) {

    // prepend all boilerplate tests with module
    // (in case terms like global and exports need to be used in other cases?)

    has.add( 'module.global', function() {
      return exports && typeof global === 'object' && global && global === global.global;
    } );

    has.add( 'module.amd', function() {
      return typeof define === 'function' && typeof define.amd === 'object' && define.amd;
    } );

    has.add( 'module.exports', function() {
      return typeof exports === 'object';
    } );

    has.add( 'module.nodejs', function() {
      // normally reads:
      // typeof module === 'object' && module && module.exports === freeExports;
      // but when this executes module.exports will have been modified
      return typeof module === 'object' && module && module.exports === freeExports;
    } );

  };

  if ( typeof define === 'function' && typeof define.amd === 'object' && define.amd ) {
    // define as an anonymous module
    define([ 'has' ], defineModule );
  }

  else if ( typeof exports === 'object' ) {
    var has = require( 'has' );

    var $$module$$ = defineModule( has );

    // in Node.js or RingoJS v0.8.0+
    if ( typeof module === 'object' && module && module.exports === freeExports ) {
      module.exports = freeExports;
    }

    // in Narwhal or RingoJS v0.7.0-
    else {
      freeExports.$$module$$ = $$module$$;
    }
  }

  else {
    // in a browser or Rhino
    window.$$module$$ = defineModule( window.has );
  }

}( this ));
