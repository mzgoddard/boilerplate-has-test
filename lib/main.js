/**
 * @preserve boilerplate-has-test
 * https://github.com/mzgoddard/boilerplate-has-test
 *
 * Copyright (c) 2012 Michael "Z" Goddard
 * Licensed under the MIT license.
 */

 /*global define:false*/

/**
 * @param {Window} window
 * @param {undefined=} undefined */
;(function( window, undefined ) {
  var freeExports = false;
  // must be loaded before! ( this may be done for r.js with the include option )
  // wait how to do get has?
  var has = window.has || require( 'has' );
  // has understands AMD and will define itself that way if available

  if ( has( 'module.exports' ) ) {
    freeExports = exports;
    if ( has( 'module.global' ) ) { window = global; }
  }

  /** @param {Hello} hello */
  var defineModule = function( hello ) {
    hello.hello();

    return {};
  };

  if ( has( 'module.amd' ) ) {
    // define as an anonymous module
    require( [ 'hello' ], defineModule );
  }

  else if ( has( 'module.exports' ) ) {
    var hello = require( 'hello' );
    var main = defineModule( hello );

    // in Node.js or RingoJS v0.8.0+
    if ( has( 'module.nodejs' ) ) {
      module.exports = main;
    }

    // in Narwhal or RingoJS v0.7.0-
    else {
      freeExports.main = main;
    }
  }

  else {
    // in a browser or Rhino
    window.main = defineModule( window.hello );
  }

}( this ));
