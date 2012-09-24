// add tests for further boilerplates

/*global define:false*/

;(
  /**
   * @param {Window} window
   * @param {?=} undefined
   */
  function( window, undefined ) {
    var freeExports = false;
    if ( typeof exports === 'object' ) {
      console.log( 'exports', typeof exports );
      freeExports = exports;
      if ( exports && typeof global === 'object' && global && global === global.global ) { window = global; }
    }

    var defineModule = function( has ) {

      // prepend all boilerplate tests with module
      // (in case terms like global and exports (or nodejs) need to be used in 
      // other cases?)

      console.log( 'installing has tests' );

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

      has.add( 'env.browser', function() {
        // there is probably better
        console.log( 'Window', window.constructor.name );
        return window.constructor.name === 'Window';
      } );

      // console.log( 'process', typeof process, typeof window.process );
      has.add( 'env.nodejs', typeof process === 'object' );

      console.log( 'installed has tests',
                   'module.global', 'module.amd', 'module.exports', 'module.nodejs',
                   'env.browser', 'env.nodejs' );

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
        freeExports.hastests = $$module$$;
      }
    }

    else {
      // in a browser or Rhino
      window.hastests = defineModule( window.has );
    }

  }( this ));
